import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Accounts } from "./accounts";
import { Accountstatuses } from "./accountstatuses";
import { Accounttax } from "./accounttax";
import { Datafeeds } from "./datafeeds";
import { Datafeedstatuses } from "./datafeedstatuses";
import { Liasettings } from "./liasettings";
import { Orderinvoices } from "./orderinvoices";
import { Orderreports } from "./orderreports";
import { Orderreturns } from "./orderreturns";
import { Orders } from "./orders";
import { Pos } from "./pos";
import { Products } from "./products";
import { Productstatuses } from "./productstatuses";
import { Shippingsettings } from "./shippingsettings";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://shoppingcontent.googleapis.com/content/v2",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

/* SDK Documentation: https://developers.google.com/shopping-content/v2/*/
export class SDK {
  public accounts: Accounts;
  public accountstatuses: Accountstatuses;
  public accounttax: Accounttax;
  public datafeeds: Datafeeds;
  public datafeedstatuses: Datafeedstatuses;
  public liasettings: Liasettings;
  public orderinvoices: Orderinvoices;
  public orderreports: Orderreports;
  public orderreturns: Orderreturns;
  public orders: Orders;
  public pos: Pos;
  public products: Products;
  public productstatuses: Productstatuses;
  public shippingsettings: Shippingsettings;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.accountstatuses = new Accountstatuses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.accounttax = new Accounttax(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.datafeeds = new Datafeeds(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.datafeedstatuses = new Datafeedstatuses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.liasettings = new Liasettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orderinvoices = new Orderinvoices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orderreports = new Orderreports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orderreturns = new Orderreturns(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orders = new Orders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pos = new Pos(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.products = new Products(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.productstatuses = new Productstatuses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.shippingsettings = new Shippingsettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}

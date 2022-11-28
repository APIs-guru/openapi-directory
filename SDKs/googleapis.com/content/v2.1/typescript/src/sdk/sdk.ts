import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Accounts } from "./accounts";
import { Accountstatuses } from "./accountstatuses";
import { Accounttax } from "./accounttax";
import { Buyongoogleprograms } from "./buyongoogleprograms";
import { Collections } from "./collections";
import { Collectionstatuses } from "./collectionstatuses";
import { Csses } from "./csses";
import { Datafeeds } from "./datafeeds";
import { Datafeedstatuses } from "./datafeedstatuses";
import { Freelistingsprogram } from "./freelistingsprogram";
import { Liasettings } from "./liasettings";
import { Localinventory } from "./localinventory";
import { Orderinvoices } from "./orderinvoices";
import { Orderreports } from "./orderreports";
import { Orderreturns } from "./orderreturns";
import { Orders } from "./orders";
import { Ordertrackingsignals } from "./ordertrackingsignals";
import { Pos } from "./pos";
import { Productdeliverytime } from "./productdeliverytime";
import { Products } from "./products";
import { Productstatuses } from "./productstatuses";
import { Promotions } from "./promotions";
import { Pubsubnotificationsettings } from "./pubsubnotificationsettings";
import { Quotas } from "./quotas";
import { Regionalinventory } from "./regionalinventory";
import { Regions } from "./regions";
import { Reports } from "./reports";
import { Repricingrules } from "./repricingrules";
import { Returnaddress } from "./returnaddress";
import { Returnpolicy } from "./returnpolicy";
import { Returnpolicyonline } from "./returnpolicyonline";
import { Settlementreports } from "./settlementreports";
import { Settlementtransactions } from "./settlementtransactions";
import { Shippingsettings } from "./shippingsettings";
import { Shoppingadsprogram } from "./shoppingadsprogram";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://shoppingcontent.googleapis.com/content/v2.1",
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
  public buyongoogleprograms: Buyongoogleprograms;
  public collections: Collections;
  public collectionstatuses: Collectionstatuses;
  public csses: Csses;
  public datafeeds: Datafeeds;
  public datafeedstatuses: Datafeedstatuses;
  public freelistingsprogram: Freelistingsprogram;
  public liasettings: Liasettings;
  public localinventory: Localinventory;
  public orderinvoices: Orderinvoices;
  public orderreports: Orderreports;
  public orderreturns: Orderreturns;
  public orders: Orders;
  public ordertrackingsignals: Ordertrackingsignals;
  public pos: Pos;
  public productdeliverytime: Productdeliverytime;
  public products: Products;
  public productstatuses: Productstatuses;
  public promotions: Promotions;
  public pubsubnotificationsettings: Pubsubnotificationsettings;
  public quotas: Quotas;
  public regionalinventory: Regionalinventory;
  public regions: Regions;
  public reports: Reports;
  public repricingrules: Repricingrules;
  public returnaddress: Returnaddress;
  public returnpolicy: Returnpolicy;
  public returnpolicyonline: Returnpolicyonline;
  public settlementreports: Settlementreports;
  public settlementtransactions: Settlementtransactions;
  public shippingsettings: Shippingsettings;
  public shoppingadsprogram: Shoppingadsprogram;

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
    
    this.buyongoogleprograms = new Buyongoogleprograms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.collections = new Collections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.collectionstatuses = new Collectionstatuses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.csses = new Csses(
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
    
    this.freelistingsprogram = new Freelistingsprogram(
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
    
    this.localinventory = new Localinventory(
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
    
    this.ordertrackingsignals = new Ordertrackingsignals(
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
    
    this.productdeliverytime = new Productdeliverytime(
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
    
    this.promotions = new Promotions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pubsubnotificationsettings = new Pubsubnotificationsettings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quotas = new Quotas(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.regionalinventory = new Regionalinventory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.regions = new Regions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.reports = new Reports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.repricingrules = new Repricingrules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.returnaddress = new Returnaddress(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.returnpolicy = new Returnpolicy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.returnpolicyonline = new Returnpolicyonline(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.settlementreports = new Settlementreports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.settlementtransactions = new Settlementtransactions(
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
    
    this.shoppingadsprogram = new Shoppingadsprogram(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}

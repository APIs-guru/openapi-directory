import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Contact } from "./contact";
import { Country } from "./country";
import { DeactivationReason } from "./deactivationreason";
import { Estimate } from "./estimate";
import { ExchangeRate } from "./exchangerate";
import { File } from "./file";
import { Invoice } from "./invoice";
import { MyInfo } from "./myinfo";
import { Order } from "./order";
import { Project } from "./project";
import { ProjectCategory } from "./projectcategory";
import { ProjectStatus } from "./projectstatus";
import { Quote } from "./quote";
import { Rfe } from "./rfe";
import { Rfq } from "./rfq";
import { Shipment } from "./shipment";
import { Spec } from "./spec";
import { SpecTemplate } from "./spectemplate";
import { Task } from "./task";
import { TeamMember } from "./teammember";
import { TeamMemberRole } from "./teammemberrole";
import { TimeCard } from "./timecard";
import { UserFields } from "./userfields";
import { Workgroup } from "./workgroup";
import { WorkgroupMembers } from "./workgroupmembers";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://example.com:80/v1",
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


export class SDK {
  public contact: Contact;
  public country: Country;
  public deactivationReason: DeactivationReason;
  public estimate: Estimate;
  public exchangeRate: ExchangeRate;
  public file: File;
  public invoice: Invoice;
  public myInfo: MyInfo;
  public order: Order;
  public project: Project;
  public projectCategory: ProjectCategory;
  public projectStatus: ProjectStatus;
  public quote: Quote;
  public rfe: Rfe;
  public rfq: Rfq;
  public shipment: Shipment;
  public spec: Spec;
  public specTemplate: SpecTemplate;
  public task: Task;
  public teamMember: TeamMember;
  public teamMemberRole: TeamMemberRole;
  public timeCard: TimeCard;
  public userFields: UserFields;
  public workgroup: Workgroup;
  public workgroupMembers: WorkgroupMembers;

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
    
    this.contact = new Contact(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.country = new Country(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.deactivationReason = new DeactivationReason(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.estimate = new Estimate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.exchangeRate = new ExchangeRate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.file = new File(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoice = new Invoice(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.myInfo = new MyInfo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.order = new Order(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.project = new Project(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projectCategory = new ProjectCategory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projectStatus = new ProjectStatus(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quote = new Quote(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rfe = new Rfe(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rfq = new Rfq(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.shipment = new Shipment(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.spec = new Spec(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.specTemplate = new SpecTemplate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.task = new Task(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.teamMember = new TeamMember(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.teamMemberRole = new TeamMemberRole(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.timeCard = new TimeCard(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userFields = new UserFields(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.workgroup = new Workgroup(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.workgroupMembers = new WorkgroupMembers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}

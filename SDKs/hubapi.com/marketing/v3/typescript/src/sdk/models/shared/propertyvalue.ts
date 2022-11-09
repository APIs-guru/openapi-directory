import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PropertyValueSourceEnum {
    Import = "IMPORT"
,    Api = "API"
,    Form = "FORM"
,    Analytics = "ANALYTICS"
,    Migration = "MIGRATION"
,    Salesforce = "SALESFORCE"
,    Integration = "INTEGRATION"
,    ContactsWeb = "CONTACTS_WEB"
,    WalIncremental = "WAL_INCREMENTAL"
,    Task = "TASK"
,    Email = "EMAIL"
,    Workflows = "WORKFLOWS"
,    Calculated = "CALCULATED"
,    Social = "SOCIAL"
,    BatchUpdate = "BATCH_UPDATE"
,    Signals = "SIGNALS"
,    Biden = "BIDEN"
,    Default = "DEFAULT"
,    Companies = "COMPANIES"
,    Deals = "DEALS"
,    Assists = "ASSISTS"
,    Presentations = "PRESENTATIONS"
,    Tally = "TALLY"
,    Sidekick = "SIDEKICK"
,    CrmUi = "CRM_UI"
,    MergeContacts = "MERGE_CONTACTS"
,    PortalUserAssociator = "PORTAL_USER_ASSOCIATOR"
,    IntegrationsPlatform = "INTEGRATIONS_PLATFORM"
,    BccToCrm = "BCC_TO_CRM"
,    ForwardToCrm = "FORWARD_TO_CRM"
,    Engagements = "ENGAGEMENTS"
,    Sales = "SALES"
,    Heisenberg = "HEISENBERG"
,    Leadin = "LEADIN"
,    GmailIntegration = "GMAIL_INTEGRATION"
,    Academy = "ACADEMY"
,    SalesMessages = "SALES_MESSAGES"
,    AvatarsService = "AVATARS_SERVICE"
,    MergeCompanies = "MERGE_COMPANIES"
,    Sequences = "SEQUENCES"
,    CompanyFamilies = "COMPANY_FAMILIES"
,    MobileIos = "MOBILE_IOS"
,    MobileAndroid = "MOBILE_ANDROID"
,    Contacts = "CONTACTS"
,    Associations = "ASSOCIATIONS"
,    Extension = "EXTENSION"
,    Success = "SUCCESS"
,    Bot = "BOT"
,    IntegrationsSync = "INTEGRATIONS_SYNC"
,    AutomationPlatform = "AUTOMATION_PLATFORM"
,    Conversations = "CONVERSATIONS"
,    EmailIntegration = "EMAIL_INTEGRATION"
,    ContentMembership = "CONTENT_MEMBERSHIP"
,    Quotes = "QUOTES"
,    BetAssignment = "BET_ASSIGNMENT"
,    Quotas = "QUOTAS"
,    BetCrmConnector = "BET_CRM_CONNECTOR"
,    Meetings = "MEETINGS"
,    MergeObjects = "MERGE_OBJECTS"
,    RecyclingBin = "RECYCLING_BIN"
,    Ads = "ADS"
,    AiGroup = "AI_GROUP"
,    Communicator = "COMMUNICATOR"
,    Settings = "SETTINGS"
,    PropertySettings = "PROPERTY_SETTINGS"
,    PipelineSettings = "PIPELINE_SETTINGS"
,    CompanyInsights = "COMPANY_INSIGHTS"
,    BehavioralEvents = "BEHAVIORAL_EVENTS"
,    Payments = "PAYMENTS"
,    Goals = "GOALS"
,    PortalObjectSync = "PORTAL_OBJECT_SYNC"
,    Approvals = "APPROVALS"
,    FileManager = "FILE_MANAGER"
,    Marketplace = "MARKETPLACE"
,    InternalProcessing = "INTERNAL_PROCESSING"
,    Forecasting = "FORECASTING"
,    SlackIntegration = "SLACK_INTEGRATION"
,    CrmUiBulkAction = "CRM_UI_BULK_ACTION"
,    WorkflowContactDeleteAction = "WORKFLOW_CONTACT_DELETE_ACTION"
}


export class PropertyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=selectedByUser" })
  selectedByUser: boolean;

  @Metadata({ data: "json, name=selectedByUserTimestamp" })
  selectedByUserTimestamp: number;

  @Metadata({ data: "json, name=source" })
  source: PropertyValueSourceEnum;

  @Metadata({ data: "json, name=sourceId" })
  sourceId: string;

  @Metadata({ data: "json, name=sourceLabel" })
  sourceLabel: string;

  @Metadata({ data: "json, name=sourceMetadata" })
  sourceMetadata: string;

  @Metadata({ data: "json, name=sourceVid" })
  sourceVid: number[];

  @Metadata({ data: "json, name=timestamp" })
  timestamp: number;

  @Metadata({ data: "json, name=updatedByUserId" })
  updatedByUserId?: number;

  @Metadata({ data: "json, name=value" })
  value: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
export declare enum FieldTypeDefinitionFieldTypeEnum {
    Booleancheckbox = "booleancheckbox",
    Checkbox = "checkbox",
    Date = "date",
    File = "file",
    Number = "number",
    Phonenumber = "phonenumber",
    Radio = "radio",
    Select = "select",
    Text = "text",
    Textarea = "textarea",
    CalculationEquation = "calculation_equation",
    CalculationRollup = "calculation_rollup",
    CalculationScore = "calculation_score",
    CalculationReadTime = "calculation_read_time",
    Unknown = "unknown"
}
export declare enum FieldTypeDefinitionReferencedObjectTypeEnum {
    Contact = "CONTACT",
    Company = "COMPANY",
    Deal = "DEAL",
    Engagement = "ENGAGEMENT",
    Ticket = "TICKET",
    Owner = "OWNER",
    Product = "PRODUCT",
    LineItem = "LINE_ITEM",
    BetDeliverableService = "BET_DELIVERABLE_SERVICE",
    Content = "CONTENT",
    Conversation = "CONVERSATION",
    BetAlert = "BET_ALERT",
    Portal = "PORTAL",
    Quote = "QUOTE",
    FormSubmissionInbounddb = "FORM_SUBMISSION_INBOUNDDB",
    Quota = "QUOTA",
    Unsubscribe = "UNSUBSCRIBE",
    Communication = "COMMUNICATION",
    FeedbackSubmission = "FEEDBACK_SUBMISSION",
    Attribution = "ATTRIBUTION",
    SalesforceSyncError = "SALESFORCE_SYNC_ERROR",
    RestorableCrmObject = "RESTORABLE_CRM_OBJECT",
    Hub = "HUB",
    LandingPage = "LANDING_PAGE",
    ProductOrFolder = "PRODUCT_OR_FOLDER",
    Task = "TASK",
    Form = "FORM",
    MarketingEmail = "MARKETING_EMAIL",
    AdAccount = "AD_ACCOUNT",
    AdCampaign = "AD_CAMPAIGN",
    AdGroup = "AD_GROUP",
    Ad = "AD",
    Keyword = "KEYWORD",
    Campaign = "CAMPAIGN",
    SocialChannel = "SOCIAL_CHANNEL",
    SocialPost = "SOCIAL_POST",
    SitePage = "SITE_PAGE",
    BlogPost = "BLOG_POST",
    Import = "IMPORT",
    Export = "EXPORT",
    Cta = "CTA",
    TaskTemplate = "TASK_TEMPLATE",
    AutomationPlatformFlow = "AUTOMATION_PLATFORM_FLOW",
    ObjectList = "OBJECT_LIST",
    Note = "NOTE",
    MeetingEvent = "MEETING_EVENT",
    Call = "CALL",
    Email = "EMAIL",
    PublishingTask = "PUBLISHING_TASK",
    ConversationSession = "CONVERSATION_SESSION",
    ContactCreateAttribution = "CONTACT_CREATE_ATTRIBUTION",
    Invoice = "INVOICE",
    MarketingEvent = "MARKETING_EVENT",
    ConversationInbox = "CONVERSATION_INBOX",
    Chatflow = "CHATFLOW",
    MediaBridge = "MEDIA_BRIDGE",
    Sequence = "SEQUENCE",
    SequenceStep = "SEQUENCE_STEP",
    Forecast = "FORECAST",
    Snippet = "SNIPPET",
    Template = "TEMPLATE",
    Unknown = "UNKNOWN"
}
export declare enum FieldTypeDefinitionTypeEnum {
    String = "string",
    Number = "number",
    Bool = "bool",
    Datetime = "datetime",
    Enumeration = "enumeration",
    Date = "date",
    PhoneNumber = "phone_number",
    CurrencyNumber = "currency_number",
    Json = "json",
    ObjectCoordinates = "object_coordinates"
}
/**
 * The data type expected by an input field.
**/
export declare class FieldTypeDefinition extends SpeakeasyBase {
    fieldType?: FieldTypeDefinitionFieldTypeEnum;
    name: string;
    options: Option[];
    optionsUrl?: string;
    referencedObjectType?: FieldTypeDefinitionReferencedObjectTypeEnum;
    type: FieldTypeDefinitionTypeEnum;
}

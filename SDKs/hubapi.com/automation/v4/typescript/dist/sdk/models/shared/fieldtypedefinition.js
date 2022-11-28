var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
export var FieldTypeDefinitionFieldTypeEnum;
(function (FieldTypeDefinitionFieldTypeEnum) {
    FieldTypeDefinitionFieldTypeEnum["Booleancheckbox"] = "booleancheckbox";
    FieldTypeDefinitionFieldTypeEnum["Checkbox"] = "checkbox";
    FieldTypeDefinitionFieldTypeEnum["Date"] = "date";
    FieldTypeDefinitionFieldTypeEnum["File"] = "file";
    FieldTypeDefinitionFieldTypeEnum["Number"] = "number";
    FieldTypeDefinitionFieldTypeEnum["Phonenumber"] = "phonenumber";
    FieldTypeDefinitionFieldTypeEnum["Radio"] = "radio";
    FieldTypeDefinitionFieldTypeEnum["Select"] = "select";
    FieldTypeDefinitionFieldTypeEnum["Text"] = "text";
    FieldTypeDefinitionFieldTypeEnum["Textarea"] = "textarea";
    FieldTypeDefinitionFieldTypeEnum["CalculationEquation"] = "calculation_equation";
    FieldTypeDefinitionFieldTypeEnum["CalculationRollup"] = "calculation_rollup";
    FieldTypeDefinitionFieldTypeEnum["CalculationScore"] = "calculation_score";
    FieldTypeDefinitionFieldTypeEnum["CalculationReadTime"] = "calculation_read_time";
    FieldTypeDefinitionFieldTypeEnum["Unknown"] = "unknown";
})(FieldTypeDefinitionFieldTypeEnum || (FieldTypeDefinitionFieldTypeEnum = {}));
export var FieldTypeDefinitionReferencedObjectTypeEnum;
(function (FieldTypeDefinitionReferencedObjectTypeEnum) {
    FieldTypeDefinitionReferencedObjectTypeEnum["Contact"] = "CONTACT";
    FieldTypeDefinitionReferencedObjectTypeEnum["Company"] = "COMPANY";
    FieldTypeDefinitionReferencedObjectTypeEnum["Deal"] = "DEAL";
    FieldTypeDefinitionReferencedObjectTypeEnum["Engagement"] = "ENGAGEMENT";
    FieldTypeDefinitionReferencedObjectTypeEnum["Ticket"] = "TICKET";
    FieldTypeDefinitionReferencedObjectTypeEnum["Owner"] = "OWNER";
    FieldTypeDefinitionReferencedObjectTypeEnum["Product"] = "PRODUCT";
    FieldTypeDefinitionReferencedObjectTypeEnum["LineItem"] = "LINE_ITEM";
    FieldTypeDefinitionReferencedObjectTypeEnum["BetDeliverableService"] = "BET_DELIVERABLE_SERVICE";
    FieldTypeDefinitionReferencedObjectTypeEnum["Content"] = "CONTENT";
    FieldTypeDefinitionReferencedObjectTypeEnum["Conversation"] = "CONVERSATION";
    FieldTypeDefinitionReferencedObjectTypeEnum["BetAlert"] = "BET_ALERT";
    FieldTypeDefinitionReferencedObjectTypeEnum["Portal"] = "PORTAL";
    FieldTypeDefinitionReferencedObjectTypeEnum["Quote"] = "QUOTE";
    FieldTypeDefinitionReferencedObjectTypeEnum["FormSubmissionInbounddb"] = "FORM_SUBMISSION_INBOUNDDB";
    FieldTypeDefinitionReferencedObjectTypeEnum["Quota"] = "QUOTA";
    FieldTypeDefinitionReferencedObjectTypeEnum["Unsubscribe"] = "UNSUBSCRIBE";
    FieldTypeDefinitionReferencedObjectTypeEnum["Communication"] = "COMMUNICATION";
    FieldTypeDefinitionReferencedObjectTypeEnum["FeedbackSubmission"] = "FEEDBACK_SUBMISSION";
    FieldTypeDefinitionReferencedObjectTypeEnum["Attribution"] = "ATTRIBUTION";
    FieldTypeDefinitionReferencedObjectTypeEnum["SalesforceSyncError"] = "SALESFORCE_SYNC_ERROR";
    FieldTypeDefinitionReferencedObjectTypeEnum["RestorableCrmObject"] = "RESTORABLE_CRM_OBJECT";
    FieldTypeDefinitionReferencedObjectTypeEnum["Hub"] = "HUB";
    FieldTypeDefinitionReferencedObjectTypeEnum["LandingPage"] = "LANDING_PAGE";
    FieldTypeDefinitionReferencedObjectTypeEnum["ProductOrFolder"] = "PRODUCT_OR_FOLDER";
    FieldTypeDefinitionReferencedObjectTypeEnum["Task"] = "TASK";
    FieldTypeDefinitionReferencedObjectTypeEnum["Form"] = "FORM";
    FieldTypeDefinitionReferencedObjectTypeEnum["MarketingEmail"] = "MARKETING_EMAIL";
    FieldTypeDefinitionReferencedObjectTypeEnum["AdAccount"] = "AD_ACCOUNT";
    FieldTypeDefinitionReferencedObjectTypeEnum["AdCampaign"] = "AD_CAMPAIGN";
    FieldTypeDefinitionReferencedObjectTypeEnum["AdGroup"] = "AD_GROUP";
    FieldTypeDefinitionReferencedObjectTypeEnum["Ad"] = "AD";
    FieldTypeDefinitionReferencedObjectTypeEnum["Keyword"] = "KEYWORD";
    FieldTypeDefinitionReferencedObjectTypeEnum["Campaign"] = "CAMPAIGN";
    FieldTypeDefinitionReferencedObjectTypeEnum["SocialChannel"] = "SOCIAL_CHANNEL";
    FieldTypeDefinitionReferencedObjectTypeEnum["SocialPost"] = "SOCIAL_POST";
    FieldTypeDefinitionReferencedObjectTypeEnum["SitePage"] = "SITE_PAGE";
    FieldTypeDefinitionReferencedObjectTypeEnum["BlogPost"] = "BLOG_POST";
    FieldTypeDefinitionReferencedObjectTypeEnum["Import"] = "IMPORT";
    FieldTypeDefinitionReferencedObjectTypeEnum["Export"] = "EXPORT";
    FieldTypeDefinitionReferencedObjectTypeEnum["Cta"] = "CTA";
    FieldTypeDefinitionReferencedObjectTypeEnum["TaskTemplate"] = "TASK_TEMPLATE";
    FieldTypeDefinitionReferencedObjectTypeEnum["AutomationPlatformFlow"] = "AUTOMATION_PLATFORM_FLOW";
    FieldTypeDefinitionReferencedObjectTypeEnum["ObjectList"] = "OBJECT_LIST";
    FieldTypeDefinitionReferencedObjectTypeEnum["Note"] = "NOTE";
    FieldTypeDefinitionReferencedObjectTypeEnum["MeetingEvent"] = "MEETING_EVENT";
    FieldTypeDefinitionReferencedObjectTypeEnum["Call"] = "CALL";
    FieldTypeDefinitionReferencedObjectTypeEnum["Email"] = "EMAIL";
    FieldTypeDefinitionReferencedObjectTypeEnum["PublishingTask"] = "PUBLISHING_TASK";
    FieldTypeDefinitionReferencedObjectTypeEnum["ConversationSession"] = "CONVERSATION_SESSION";
    FieldTypeDefinitionReferencedObjectTypeEnum["ContactCreateAttribution"] = "CONTACT_CREATE_ATTRIBUTION";
    FieldTypeDefinitionReferencedObjectTypeEnum["Invoice"] = "INVOICE";
    FieldTypeDefinitionReferencedObjectTypeEnum["MarketingEvent"] = "MARKETING_EVENT";
    FieldTypeDefinitionReferencedObjectTypeEnum["ConversationInbox"] = "CONVERSATION_INBOX";
    FieldTypeDefinitionReferencedObjectTypeEnum["Chatflow"] = "CHATFLOW";
    FieldTypeDefinitionReferencedObjectTypeEnum["MediaBridge"] = "MEDIA_BRIDGE";
    FieldTypeDefinitionReferencedObjectTypeEnum["Sequence"] = "SEQUENCE";
    FieldTypeDefinitionReferencedObjectTypeEnum["SequenceStep"] = "SEQUENCE_STEP";
    FieldTypeDefinitionReferencedObjectTypeEnum["Forecast"] = "FORECAST";
    FieldTypeDefinitionReferencedObjectTypeEnum["Snippet"] = "SNIPPET";
    FieldTypeDefinitionReferencedObjectTypeEnum["Template"] = "TEMPLATE";
    FieldTypeDefinitionReferencedObjectTypeEnum["Unknown"] = "UNKNOWN";
})(FieldTypeDefinitionReferencedObjectTypeEnum || (FieldTypeDefinitionReferencedObjectTypeEnum = {}));
export var FieldTypeDefinitionTypeEnum;
(function (FieldTypeDefinitionTypeEnum) {
    FieldTypeDefinitionTypeEnum["String"] = "string";
    FieldTypeDefinitionTypeEnum["Number"] = "number";
    FieldTypeDefinitionTypeEnum["Bool"] = "bool";
    FieldTypeDefinitionTypeEnum["Datetime"] = "datetime";
    FieldTypeDefinitionTypeEnum["Enumeration"] = "enumeration";
    FieldTypeDefinitionTypeEnum["Date"] = "date";
    FieldTypeDefinitionTypeEnum["PhoneNumber"] = "phone_number";
    FieldTypeDefinitionTypeEnum["CurrencyNumber"] = "currency_number";
    FieldTypeDefinitionTypeEnum["Json"] = "json";
    FieldTypeDefinitionTypeEnum["ObjectCoordinates"] = "object_coordinates";
})(FieldTypeDefinitionTypeEnum || (FieldTypeDefinitionTypeEnum = {}));
// FieldTypeDefinition
/**
 * The data type expected by an input field.
**/
var FieldTypeDefinition = /** @class */ (function (_super) {
    __extends(FieldTypeDefinition, _super);
    function FieldTypeDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldType" }),
        __metadata("design:type", String)
    ], FieldTypeDefinition.prototype, "fieldType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FieldTypeDefinition.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: Option }),
        __metadata("design:type", Array)
    ], FieldTypeDefinition.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optionsUrl" }),
        __metadata("design:type", String)
    ], FieldTypeDefinition.prototype, "optionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referencedObjectType" }),
        __metadata("design:type", String)
    ], FieldTypeDefinition.prototype, "referencedObjectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FieldTypeDefinition.prototype, "type", void 0);
    return FieldTypeDefinition;
}(SpeakeasyBase));
export { FieldTypeDefinition };

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
export var PropertyValueSourceEnum;
(function (PropertyValueSourceEnum) {
    PropertyValueSourceEnum["Import"] = "IMPORT";
    PropertyValueSourceEnum["Api"] = "API";
    PropertyValueSourceEnum["Form"] = "FORM";
    PropertyValueSourceEnum["Analytics"] = "ANALYTICS";
    PropertyValueSourceEnum["Migration"] = "MIGRATION";
    PropertyValueSourceEnum["Salesforce"] = "SALESFORCE";
    PropertyValueSourceEnum["Integration"] = "INTEGRATION";
    PropertyValueSourceEnum["ContactsWeb"] = "CONTACTS_WEB";
    PropertyValueSourceEnum["WalIncremental"] = "WAL_INCREMENTAL";
    PropertyValueSourceEnum["Task"] = "TASK";
    PropertyValueSourceEnum["Email"] = "EMAIL";
    PropertyValueSourceEnum["Workflows"] = "WORKFLOWS";
    PropertyValueSourceEnum["Calculated"] = "CALCULATED";
    PropertyValueSourceEnum["Social"] = "SOCIAL";
    PropertyValueSourceEnum["BatchUpdate"] = "BATCH_UPDATE";
    PropertyValueSourceEnum["Signals"] = "SIGNALS";
    PropertyValueSourceEnum["Biden"] = "BIDEN";
    PropertyValueSourceEnum["Default"] = "DEFAULT";
    PropertyValueSourceEnum["Companies"] = "COMPANIES";
    PropertyValueSourceEnum["Deals"] = "DEALS";
    PropertyValueSourceEnum["Assists"] = "ASSISTS";
    PropertyValueSourceEnum["Presentations"] = "PRESENTATIONS";
    PropertyValueSourceEnum["Tally"] = "TALLY";
    PropertyValueSourceEnum["Sidekick"] = "SIDEKICK";
    PropertyValueSourceEnum["CrmUi"] = "CRM_UI";
    PropertyValueSourceEnum["MergeContacts"] = "MERGE_CONTACTS";
    PropertyValueSourceEnum["PortalUserAssociator"] = "PORTAL_USER_ASSOCIATOR";
    PropertyValueSourceEnum["IntegrationsPlatform"] = "INTEGRATIONS_PLATFORM";
    PropertyValueSourceEnum["BccToCrm"] = "BCC_TO_CRM";
    PropertyValueSourceEnum["ForwardToCrm"] = "FORWARD_TO_CRM";
    PropertyValueSourceEnum["Engagements"] = "ENGAGEMENTS";
    PropertyValueSourceEnum["Sales"] = "SALES";
    PropertyValueSourceEnum["Heisenberg"] = "HEISENBERG";
    PropertyValueSourceEnum["Leadin"] = "LEADIN";
    PropertyValueSourceEnum["GmailIntegration"] = "GMAIL_INTEGRATION";
    PropertyValueSourceEnum["Academy"] = "ACADEMY";
    PropertyValueSourceEnum["SalesMessages"] = "SALES_MESSAGES";
    PropertyValueSourceEnum["AvatarsService"] = "AVATARS_SERVICE";
    PropertyValueSourceEnum["MergeCompanies"] = "MERGE_COMPANIES";
    PropertyValueSourceEnum["Sequences"] = "SEQUENCES";
    PropertyValueSourceEnum["CompanyFamilies"] = "COMPANY_FAMILIES";
    PropertyValueSourceEnum["MobileIos"] = "MOBILE_IOS";
    PropertyValueSourceEnum["MobileAndroid"] = "MOBILE_ANDROID";
    PropertyValueSourceEnum["Contacts"] = "CONTACTS";
    PropertyValueSourceEnum["Associations"] = "ASSOCIATIONS";
    PropertyValueSourceEnum["Extension"] = "EXTENSION";
    PropertyValueSourceEnum["Success"] = "SUCCESS";
    PropertyValueSourceEnum["Bot"] = "BOT";
    PropertyValueSourceEnum["IntegrationsSync"] = "INTEGRATIONS_SYNC";
    PropertyValueSourceEnum["AutomationPlatform"] = "AUTOMATION_PLATFORM";
    PropertyValueSourceEnum["Conversations"] = "CONVERSATIONS";
    PropertyValueSourceEnum["EmailIntegration"] = "EMAIL_INTEGRATION";
    PropertyValueSourceEnum["ContentMembership"] = "CONTENT_MEMBERSHIP";
    PropertyValueSourceEnum["Quotes"] = "QUOTES";
    PropertyValueSourceEnum["BetAssignment"] = "BET_ASSIGNMENT";
    PropertyValueSourceEnum["Quotas"] = "QUOTAS";
    PropertyValueSourceEnum["BetCrmConnector"] = "BET_CRM_CONNECTOR";
    PropertyValueSourceEnum["Meetings"] = "MEETINGS";
    PropertyValueSourceEnum["MergeObjects"] = "MERGE_OBJECTS";
    PropertyValueSourceEnum["RecyclingBin"] = "RECYCLING_BIN";
    PropertyValueSourceEnum["Ads"] = "ADS";
    PropertyValueSourceEnum["AiGroup"] = "AI_GROUP";
    PropertyValueSourceEnum["Communicator"] = "COMMUNICATOR";
    PropertyValueSourceEnum["Settings"] = "SETTINGS";
    PropertyValueSourceEnum["PropertySettings"] = "PROPERTY_SETTINGS";
    PropertyValueSourceEnum["PipelineSettings"] = "PIPELINE_SETTINGS";
    PropertyValueSourceEnum["CompanyInsights"] = "COMPANY_INSIGHTS";
    PropertyValueSourceEnum["BehavioralEvents"] = "BEHAVIORAL_EVENTS";
    PropertyValueSourceEnum["Payments"] = "PAYMENTS";
    PropertyValueSourceEnum["Goals"] = "GOALS";
    PropertyValueSourceEnum["PortalObjectSync"] = "PORTAL_OBJECT_SYNC";
    PropertyValueSourceEnum["Approvals"] = "APPROVALS";
    PropertyValueSourceEnum["FileManager"] = "FILE_MANAGER";
    PropertyValueSourceEnum["Marketplace"] = "MARKETPLACE";
    PropertyValueSourceEnum["InternalProcessing"] = "INTERNAL_PROCESSING";
    PropertyValueSourceEnum["Forecasting"] = "FORECASTING";
    PropertyValueSourceEnum["SlackIntegration"] = "SLACK_INTEGRATION";
    PropertyValueSourceEnum["CrmUiBulkAction"] = "CRM_UI_BULK_ACTION";
    PropertyValueSourceEnum["WorkflowContactDeleteAction"] = "WORKFLOW_CONTACT_DELETE_ACTION";
})(PropertyValueSourceEnum || (PropertyValueSourceEnum = {}));
var PropertyValue = /** @class */ (function (_super) {
    __extends(PropertyValue, _super);
    function PropertyValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PropertyValue.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], PropertyValue.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedByUser" }),
        __metadata("design:type", Boolean)
    ], PropertyValue.prototype, "selectedByUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedByUserTimestamp" }),
        __metadata("design:type", Number)
    ], PropertyValue.prototype, "selectedByUserTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], PropertyValue.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], PropertyValue.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceLabel" }),
        __metadata("design:type", String)
    ], PropertyValue.prototype, "sourceLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceMetadata" }),
        __metadata("design:type", String)
    ], PropertyValue.prototype, "sourceMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceVid" }),
        __metadata("design:type", Array)
    ], PropertyValue.prototype, "sourceVid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Number)
    ], PropertyValue.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedByUserId" }),
        __metadata("design:type", Number)
    ], PropertyValue.prototype, "updatedByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PropertyValue.prototype, "value", void 0);
    return PropertyValue;
}(SpeakeasyBase));
export { PropertyValue };

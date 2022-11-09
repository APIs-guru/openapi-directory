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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountInfo } from "./accountinfo";
import { DriveOptions } from "./driveoptions";
import { HangoutsChatInfo } from "./hangoutschatinfo";
import { HangoutsChatOptions } from "./hangoutschatoptions";
import { MailOptions } from "./mailoptions";
import { OrgUnitInfo } from "./orgunitinfo";
import { SharedDriveInfo } from "./shareddriveinfo";
import { SitesUrlInfo } from "./sitesurlinfo";
import { TeamDriveInfo } from "./teamdriveinfo";
import { VoiceOptions } from "./voiceoptions";
export var QueryCorpusEnum;
(function (QueryCorpusEnum) {
    QueryCorpusEnum["CorpusTypeUnspecified"] = "CORPUS_TYPE_UNSPECIFIED";
    QueryCorpusEnum["Drive"] = "DRIVE";
    QueryCorpusEnum["Mail"] = "MAIL";
    QueryCorpusEnum["Groups"] = "GROUPS";
    QueryCorpusEnum["HangoutsChat"] = "HANGOUTS_CHAT";
    QueryCorpusEnum["Voice"] = "VOICE";
})(QueryCorpusEnum || (QueryCorpusEnum = {}));
export var QueryDataScopeEnum;
(function (QueryDataScopeEnum) {
    QueryDataScopeEnum["DataScopeUnspecified"] = "DATA_SCOPE_UNSPECIFIED";
    QueryDataScopeEnum["AllData"] = "ALL_DATA";
    QueryDataScopeEnum["HeldData"] = "HELD_DATA";
    QueryDataScopeEnum["UnprocessedData"] = "UNPROCESSED_DATA";
})(QueryDataScopeEnum || (QueryDataScopeEnum = {}));
export var QueryMethodEnum;
(function (QueryMethodEnum) {
    QueryMethodEnum["SearchMethodUnspecified"] = "SEARCH_METHOD_UNSPECIFIED";
    QueryMethodEnum["Account"] = "ACCOUNT";
    QueryMethodEnum["OrgUnit"] = "ORG_UNIT";
    QueryMethodEnum["TeamDrive"] = "TEAM_DRIVE";
    QueryMethodEnum["EntireOrg"] = "ENTIRE_ORG";
    QueryMethodEnum["Room"] = "ROOM";
    QueryMethodEnum["SitesUrl"] = "SITES_URL";
    QueryMethodEnum["SharedDrive"] = "SHARED_DRIVE";
})(QueryMethodEnum || (QueryMethodEnum = {}));
export var QuerySearchMethodEnum;
(function (QuerySearchMethodEnum) {
    QuerySearchMethodEnum["SearchMethodUnspecified"] = "SEARCH_METHOD_UNSPECIFIED";
    QuerySearchMethodEnum["Account"] = "ACCOUNT";
    QuerySearchMethodEnum["OrgUnit"] = "ORG_UNIT";
    QuerySearchMethodEnum["TeamDrive"] = "TEAM_DRIVE";
    QuerySearchMethodEnum["EntireOrg"] = "ENTIRE_ORG";
    QuerySearchMethodEnum["Room"] = "ROOM";
    QuerySearchMethodEnum["SitesUrl"] = "SITES_URL";
    QuerySearchMethodEnum["SharedDrive"] = "SHARED_DRIVE";
})(QuerySearchMethodEnum || (QuerySearchMethodEnum = {}));
// Query
/**
 * The query definition used for search and export.
**/
var Query = /** @class */ (function (_super) {
    __extends(Query, _super);
    function Query() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountInfo" }),
        __metadata("design:type", AccountInfo)
    ], Query.prototype, "accountInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=corpus" }),
        __metadata("design:type", String)
    ], Query.prototype, "corpus", void 0);
    __decorate([
        Metadata({ data: "json, name=dataScope" }),
        __metadata("design:type", String)
    ], Query.prototype, "dataScope", void 0);
    __decorate([
        Metadata({ data: "json, name=driveOptions" }),
        __metadata("design:type", DriveOptions)
    ], Query.prototype, "driveOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Query.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=hangoutsChatInfo" }),
        __metadata("design:type", HangoutsChatInfo)
    ], Query.prototype, "hangoutsChatInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=hangoutsChatOptions" }),
        __metadata("design:type", HangoutsChatOptions)
    ], Query.prototype, "hangoutsChatOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=mailOptions" }),
        __metadata("design:type", MailOptions)
    ], Query.prototype, "mailOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], Query.prototype, "method", void 0);
    __decorate([
        Metadata({ data: "json, name=orgUnitInfo" }),
        __metadata("design:type", OrgUnitInfo)
    ], Query.prototype, "orgUnitInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=searchMethod" }),
        __metadata("design:type", String)
    ], Query.prototype, "searchMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sharedDriveInfo" }),
        __metadata("design:type", SharedDriveInfo)
    ], Query.prototype, "sharedDriveInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=sitesUrlInfo" }),
        __metadata("design:type", SitesUrlInfo)
    ], Query.prototype, "sitesUrlInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Query.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=teamDriveInfo" }),
        __metadata("design:type", TeamDriveInfo)
    ], Query.prototype, "teamDriveInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=terms" }),
        __metadata("design:type", String)
    ], Query.prototype, "terms", void 0);
    __decorate([
        Metadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], Query.prototype, "timeZone", void 0);
    __decorate([
        Metadata({ data: "json, name=voiceOptions" }),
        __metadata("design:type", VoiceOptions)
    ], Query.prototype, "voiceOptions", void 0);
    return Query;
}(SpeakeasyBase));
export { Query };

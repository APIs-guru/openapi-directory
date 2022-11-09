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
import * as shared from "../shared";
var GetWorkspaceIdActivitiesPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdActivitiesPathParams, _super);
    function GetWorkspaceIdActivitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesPathParams.prototype, "workspaceId", void 0);
    return GetWorkspaceIdActivitiesPathParams;
}(SpeakeasyBase));
export { GetWorkspaceIdActivitiesPathParams };
export var GetWorkspaceIdActivitiesActivityTypeEnum;
(function (GetWorkspaceIdActivitiesActivityTypeEnum) {
    GetWorkspaceIdActivitiesActivityTypeEnum["DiscordMessageSent"] = "discord:message:sent";
    GetWorkspaceIdActivitiesActivityTypeEnum["SlackThreadReplied"] = "slack:thread:replied";
    GetWorkspaceIdActivitiesActivityTypeEnum["DiscordMessageReplied"] = "discord:message:replied";
    GetWorkspaceIdActivitiesActivityTypeEnum["TweetSent"] = "tweet:sent";
    GetWorkspaceIdActivitiesActivityTypeEnum["TwitterFollowed"] = "twitter:followed";
    GetWorkspaceIdActivitiesActivityTypeEnum["DiscordServerJoined"] = "discord:server:joined";
    GetWorkspaceIdActivitiesActivityTypeEnum["DiscourseTopicCreated"] = "discourse:topic:created";
    GetWorkspaceIdActivitiesActivityTypeEnum["DiscoursePostCreated"] = "discourse:post:created";
    GetWorkspaceIdActivitiesActivityTypeEnum["SlackMessageSent"] = "slack:message:sent";
    GetWorkspaceIdActivitiesActivityTypeEnum["NoteCreated"] = "note:created";
    GetWorkspaceIdActivitiesActivityTypeEnum["PostCreated"] = "post:created";
    GetWorkspaceIdActivitiesActivityTypeEnum["IssuesOpened"] = "issues:opened";
    GetWorkspaceIdActivitiesActivityTypeEnum["IssueCommentCreated"] = "issue_comment:created";
    GetWorkspaceIdActivitiesActivityTypeEnum["PullRequestsOpened"] = "pull_requests:opened";
    GetWorkspaceIdActivitiesActivityTypeEnum["PullRequestsMerged"] = "pull_requests:merged";
    GetWorkspaceIdActivitiesActivityTypeEnum["CustomHappened"] = "custom:happened";
    GetWorkspaceIdActivitiesActivityTypeEnum["SlackChannelJoined"] = "slack:channel:joined";
    GetWorkspaceIdActivitiesActivityTypeEnum["StarCreated"] = "star:created";
})(GetWorkspaceIdActivitiesActivityTypeEnum || (GetWorkspaceIdActivitiesActivityTypeEnum = {}));
export var GetWorkspaceIdActivitiesAffiliationEnum;
(function (GetWorkspaceIdActivitiesAffiliationEnum) {
    GetWorkspaceIdActivitiesAffiliationEnum["Member"] = "member";
    GetWorkspaceIdActivitiesAffiliationEnum["Teammate"] = "teammate";
})(GetWorkspaceIdActivitiesAffiliationEnum || (GetWorkspaceIdActivitiesAffiliationEnum = {}));
export var GetWorkspaceIdActivitiesDirectionEnum;
(function (GetWorkspaceIdActivitiesDirectionEnum) {
    GetWorkspaceIdActivitiesDirectionEnum["Asc"] = "ASC";
    GetWorkspaceIdActivitiesDirectionEnum["Desc"] = "DESC";
})(GetWorkspaceIdActivitiesDirectionEnum || (GetWorkspaceIdActivitiesDirectionEnum = {}));
export var GetWorkspaceIdActivitiesIdentityEnum;
(function (GetWorkspaceIdActivitiesIdentityEnum) {
    GetWorkspaceIdActivitiesIdentityEnum["Github"] = "github";
    GetWorkspaceIdActivitiesIdentityEnum["Twitter"] = "twitter";
    GetWorkspaceIdActivitiesIdentityEnum["Email"] = "email";
    GetWorkspaceIdActivitiesIdentityEnum["Discourse"] = "discourse";
    GetWorkspaceIdActivitiesIdentityEnum["Linkedin"] = "linkedin";
    GetWorkspaceIdActivitiesIdentityEnum["Devto"] = "devto";
    GetWorkspaceIdActivitiesIdentityEnum["Slack"] = "slack";
    GetWorkspaceIdActivitiesIdentityEnum["Discord"] = "discord";
})(GetWorkspaceIdActivitiesIdentityEnum || (GetWorkspaceIdActivitiesIdentityEnum = {}));
export var GetWorkspaceIdActivitiesItemsEnum;
(function (GetWorkspaceIdActivitiesItemsEnum) {
    GetWorkspaceIdActivitiesItemsEnum["Ten"] = "10";
    GetWorkspaceIdActivitiesItemsEnum["Fifty"] = "50";
    GetWorkspaceIdActivitiesItemsEnum["OneHundred"] = "100";
})(GetWorkspaceIdActivitiesItemsEnum || (GetWorkspaceIdActivitiesItemsEnum = {}));
export var GetWorkspaceIdActivitiesOrbitLevelEnum;
(function (GetWorkspaceIdActivitiesOrbitLevelEnum) {
    GetWorkspaceIdActivitiesOrbitLevelEnum["One"] = "1";
    GetWorkspaceIdActivitiesOrbitLevelEnum["Two"] = "2";
    GetWorkspaceIdActivitiesOrbitLevelEnum["Three"] = "3";
    GetWorkspaceIdActivitiesOrbitLevelEnum["Four"] = "4";
    GetWorkspaceIdActivitiesOrbitLevelEnum["N"] = "n";
})(GetWorkspaceIdActivitiesOrbitLevelEnum || (GetWorkspaceIdActivitiesOrbitLevelEnum = {}));
export var GetWorkspaceIdActivitiesSortEnum;
(function (GetWorkspaceIdActivitiesSortEnum) {
    GetWorkspaceIdActivitiesSortEnum["OccurredAt"] = "occurred_at";
    GetWorkspaceIdActivitiesSortEnum["Member"] = "member";
})(GetWorkspaceIdActivitiesSortEnum || (GetWorkspaceIdActivitiesSortEnum = {}));
var GetWorkspaceIdActivitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdActivitiesQueryParams, _super);
    function GetWorkspaceIdActivitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=activity_tags" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "activityTags", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=activity_type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "activityType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=affiliation" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "affiliation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=company" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "company", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=identity" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=items" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "items", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=member_tags" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "memberTags", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orbit_level" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "orbitLevel", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=weight" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesQueryParams.prototype, "weight", void 0);
    return GetWorkspaceIdActivitiesQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceIdActivitiesQueryParams };
var GetWorkspaceIdActivitiesSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdActivitiesSecurity, _super);
    function GetWorkspaceIdActivitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], GetWorkspaceIdActivitiesSecurity.prototype, "bearer", void 0);
    return GetWorkspaceIdActivitiesSecurity;
}(SpeakeasyBase));
export { GetWorkspaceIdActivitiesSecurity };
var GetWorkspaceIdActivitiesRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdActivitiesRequest, _super);
    function GetWorkspaceIdActivitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspaceIdActivitiesPathParams)
    ], GetWorkspaceIdActivitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspaceIdActivitiesQueryParams)
    ], GetWorkspaceIdActivitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWorkspaceIdActivitiesSecurity)
    ], GetWorkspaceIdActivitiesRequest.prototype, "security", void 0);
    return GetWorkspaceIdActivitiesRequest;
}(SpeakeasyBase));
export { GetWorkspaceIdActivitiesRequest };
var GetWorkspaceIdActivitiesResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdActivitiesResponse, _super);
    function GetWorkspaceIdActivitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWorkspaceIdActivitiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceIdActivitiesResponse.prototype, "statusCode", void 0);
    return GetWorkspaceIdActivitiesResponse;
}(SpeakeasyBase));
export { GetWorkspaceIdActivitiesResponse };

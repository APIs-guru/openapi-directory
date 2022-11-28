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
import * as shared from "../shared";
var GetWorkspaceIdMembersPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersPathParams, _super);
    function GetWorkspaceIdMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersPathParams.prototype, "workspaceId", void 0);
    return GetWorkspaceIdMembersPathParams;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersPathParams };
export var GetWorkspaceIdMembersActivityTypeEnum;
(function (GetWorkspaceIdMembersActivityTypeEnum) {
    GetWorkspaceIdMembersActivityTypeEnum["DiscordMessageSent"] = "discord:message:sent";
    GetWorkspaceIdMembersActivityTypeEnum["SlackThreadReplied"] = "slack:thread:replied";
    GetWorkspaceIdMembersActivityTypeEnum["DiscordMessageReplied"] = "discord:message:replied";
    GetWorkspaceIdMembersActivityTypeEnum["TweetSent"] = "tweet:sent";
    GetWorkspaceIdMembersActivityTypeEnum["TwitterFollowed"] = "twitter:followed";
    GetWorkspaceIdMembersActivityTypeEnum["DiscordServerJoined"] = "discord:server:joined";
    GetWorkspaceIdMembersActivityTypeEnum["DiscourseTopicCreated"] = "discourse:topic:created";
    GetWorkspaceIdMembersActivityTypeEnum["DiscoursePostCreated"] = "discourse:post:created";
    GetWorkspaceIdMembersActivityTypeEnum["SlackMessageSent"] = "slack:message:sent";
    GetWorkspaceIdMembersActivityTypeEnum["NoteCreated"] = "note:created";
    GetWorkspaceIdMembersActivityTypeEnum["PostCreated"] = "post:created";
    GetWorkspaceIdMembersActivityTypeEnum["IssuesOpened"] = "issues:opened";
    GetWorkspaceIdMembersActivityTypeEnum["IssueCommentCreated"] = "issue_comment:created";
    GetWorkspaceIdMembersActivityTypeEnum["PullRequestsOpened"] = "pull_requests:opened";
    GetWorkspaceIdMembersActivityTypeEnum["PullRequestsMerged"] = "pull_requests:merged";
    GetWorkspaceIdMembersActivityTypeEnum["CustomHappened"] = "custom:happened";
    GetWorkspaceIdMembersActivityTypeEnum["SlackChannelJoined"] = "slack:channel:joined";
    GetWorkspaceIdMembersActivityTypeEnum["StarCreated"] = "star:created";
})(GetWorkspaceIdMembersActivityTypeEnum || (GetWorkspaceIdMembersActivityTypeEnum = {}));
export var GetWorkspaceIdMembersAffiliationEnum;
(function (GetWorkspaceIdMembersAffiliationEnum) {
    GetWorkspaceIdMembersAffiliationEnum["Member"] = "member";
    GetWorkspaceIdMembersAffiliationEnum["Teammate"] = "teammate";
})(GetWorkspaceIdMembersAffiliationEnum || (GetWorkspaceIdMembersAffiliationEnum = {}));
export var GetWorkspaceIdMembersDirectionEnum;
(function (GetWorkspaceIdMembersDirectionEnum) {
    GetWorkspaceIdMembersDirectionEnum["Asc"] = "ASC";
    GetWorkspaceIdMembersDirectionEnum["Desc"] = "DESC";
})(GetWorkspaceIdMembersDirectionEnum || (GetWorkspaceIdMembersDirectionEnum = {}));
export var GetWorkspaceIdMembersIdentityEnum;
(function (GetWorkspaceIdMembersIdentityEnum) {
    GetWorkspaceIdMembersIdentityEnum["Github"] = "github";
    GetWorkspaceIdMembersIdentityEnum["Twitter"] = "twitter";
    GetWorkspaceIdMembersIdentityEnum["Email"] = "email";
    GetWorkspaceIdMembersIdentityEnum["Discourse"] = "discourse";
    GetWorkspaceIdMembersIdentityEnum["Linkedin"] = "linkedin";
    GetWorkspaceIdMembersIdentityEnum["Devto"] = "devto";
    GetWorkspaceIdMembersIdentityEnum["Slack"] = "slack";
    GetWorkspaceIdMembersIdentityEnum["Discord"] = "discord";
})(GetWorkspaceIdMembersIdentityEnum || (GetWorkspaceIdMembersIdentityEnum = {}));
export var GetWorkspaceIdMembersItemsEnum;
(function (GetWorkspaceIdMembersItemsEnum) {
    GetWorkspaceIdMembersItemsEnum["Ten"] = "10";
    GetWorkspaceIdMembersItemsEnum["Fifty"] = "50";
    GetWorkspaceIdMembersItemsEnum["OneHundred"] = "100";
})(GetWorkspaceIdMembersItemsEnum || (GetWorkspaceIdMembersItemsEnum = {}));
export var GetWorkspaceIdMembersOrbitLevelEnum;
(function (GetWorkspaceIdMembersOrbitLevelEnum) {
    GetWorkspaceIdMembersOrbitLevelEnum["One"] = "1";
    GetWorkspaceIdMembersOrbitLevelEnum["Two"] = "2";
    GetWorkspaceIdMembersOrbitLevelEnum["Three"] = "3";
    GetWorkspaceIdMembersOrbitLevelEnum["Four"] = "4";
    GetWorkspaceIdMembersOrbitLevelEnum["N"] = "n";
})(GetWorkspaceIdMembersOrbitLevelEnum || (GetWorkspaceIdMembersOrbitLevelEnum = {}));
export var GetWorkspaceIdMembersSortEnum;
(function (GetWorkspaceIdMembersSortEnum) {
    GetWorkspaceIdMembersSortEnum["ActivitiesCount"] = "activities_count";
    GetWorkspaceIdMembersSortEnum["Company"] = "company";
    GetWorkspaceIdMembersSortEnum["CreatedAt"] = "created_at";
    GetWorkspaceIdMembersSortEnum["FirstActivity"] = "first_activity";
    GetWorkspaceIdMembersSortEnum["GithubFollowers"] = "github_followers";
    GetWorkspaceIdMembersSortEnum["Id"] = "id";
    GetWorkspaceIdMembersSortEnum["LastActivity"] = "last_activity";
    GetWorkspaceIdMembersSortEnum["Location"] = "location";
    GetWorkspaceIdMembersSortEnum["Love"] = "love";
    GetWorkspaceIdMembersSortEnum["Name"] = "name";
    GetWorkspaceIdMembersSortEnum["Orbit"] = "orbit";
    GetWorkspaceIdMembersSortEnum["Reach"] = "reach";
    GetWorkspaceIdMembersSortEnum["Title"] = "title";
    GetWorkspaceIdMembersSortEnum["TwitterFollowers"] = "twitter_followers";
    GetWorkspaceIdMembersSortEnum["UpdatedAt"] = "updated_at";
})(GetWorkspaceIdMembersSortEnum || (GetWorkspaceIdMembersSortEnum = {}));
var GetWorkspaceIdMembersQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersQueryParams, _super);
    function GetWorkspaceIdMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activities_count_max" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "activitiesCountMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activities_count_min" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "activitiesCountMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activity_tags" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "activityTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activity_type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "activityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=affiliation" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "affiliation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identity" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=items" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=member_tags" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "memberTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orbit_level" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "orbitLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weight" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersQueryParams.prototype, "weight", void 0);
    return GetWorkspaceIdMembersQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersQueryParams };
var GetWorkspaceIdMembersSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersSecurity, _super);
    function GetWorkspaceIdMembersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], GetWorkspaceIdMembersSecurity.prototype, "bearer", void 0);
    return GetWorkspaceIdMembersSecurity;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersSecurity };
var GetWorkspaceIdMembersRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersRequest, _super);
    function GetWorkspaceIdMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersPathParams)
    ], GetWorkspaceIdMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersQueryParams)
    ], GetWorkspaceIdMembersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdMembersSecurity)
    ], GetWorkspaceIdMembersRequest.prototype, "security", void 0);
    return GetWorkspaceIdMembersRequest;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersRequest };
var GetWorkspaceIdMembersResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdMembersResponse, _super);
    function GetWorkspaceIdMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspaceIdMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceIdMembersResponse.prototype, "statusCode", void 0);
    return GetWorkspaceIdMembersResponse;
}(SpeakeasyBase));
export { GetWorkspaceIdMembersResponse };

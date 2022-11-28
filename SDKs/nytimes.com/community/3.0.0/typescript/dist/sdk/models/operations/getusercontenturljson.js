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
var GetUserContentUrlJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetUserContentUrlJsonQueryParams, _super);
    function GetUserContentUrlJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJsonQueryParams.prototype, "url", void 0);
    return GetUserContentUrlJsonQueryParams;
}(SpeakeasyBase));
export { GetUserContentUrlJsonQueryParams };
var GetUserContentUrlJsonSecurity = /** @class */ (function (_super) {
    __extends(GetUserContentUrlJsonSecurity, _super);
    function GetUserContentUrlJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUserContentUrlJsonSecurity.prototype, "apiKey", void 0);
    return GetUserContentUrlJsonSecurity;
}(SpeakeasyBase));
export { GetUserContentUrlJsonSecurity };
var GetUserContentUrlJson200ApplicationJsonDebug = /** @class */ (function (_super) {
    __extends(GetUserContentUrlJson200ApplicationJsonDebug, _super);
    function GetUserContentUrlJson200ApplicationJsonDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonDebug.prototype, "version", void 0);
    return GetUserContentUrlJson200ApplicationJsonDebug;
}(SpeakeasyBase));
export { GetUserContentUrlJson200ApplicationJsonDebug };
var GetUserContentUrlJson200ApplicationJsonResultsComments = /** @class */ (function (_super) {
    __extends(GetUserContentUrlJson200ApplicationJsonResultsComments, _super);
    function GetUserContentUrlJson200ApplicationJsonResultsComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approveDate" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "approveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentBody" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "commentBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentID" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentSequence" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "commentSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentTitle" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "commentTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentType" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "commentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=depth" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "depth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editorsSelection" }),
        __metadata("design:type", Boolean)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "editorsSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentID" }),
        __metadata("design:type", Object)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentUserDisplayName" }),
        __metadata("design:type", Object)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "parentUserDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permID" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "permId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=picURL" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "picUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendations" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "recommendations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendedFlag" }),
        __metadata("design:type", Object)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "recommendedFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replies" }),
        __metadata("design:type", Array)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "replies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replyCount" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportAbuseFlag" }),
        __metadata("design:type", Object)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "reportAbuseFlag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharing" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "sharing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timespeople" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "timespeople", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trusted" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "trusted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDate" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "updateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDisplayName" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "userDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userID" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLocation" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "userLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userTitle" }),
        __metadata("design:type", Object)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userURL" }),
        __metadata("design:type", Object)
    ], GetUserContentUrlJson200ApplicationJsonResultsComments.prototype, "userUrl", void 0);
    return GetUserContentUrlJson200ApplicationJsonResultsComments;
}(SpeakeasyBase));
export { GetUserContentUrlJson200ApplicationJsonResultsComments };
var GetUserContentUrlJson200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetUserContentUrlJson200ApplicationJsonResults, _super);
    function GetUserContentUrlJson200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_timestamp" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "apiTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callerID" }),
        __metadata("design:type", Object)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "callerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments", elemType: GetUserContentUrlJson200ApplicationJsonResultsComments }),
        __metadata("design:type", Array)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=depthLimit" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "depthLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replyLimit" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "replyLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCommentsFound" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalCommentsFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCommentsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalCommentsReturned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalEditorsSelectionFound" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalEditorsSelectionFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalEditorsSelectionReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalEditorsSelectionReturned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalParentCommentsFound" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalParentCommentsFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalParentCommentsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalParentCommentsReturned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalRecommendationsFound" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalRecommendationsFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalRecommendationsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalRecommendationsReturned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalReplyCommentsFound" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalReplyCommentsFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalReplyCommentsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalReplyCommentsReturned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalReporterReplyCommentsFound" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalReporterReplyCommentsFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalReporterReplyCommentsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentUrlJson200ApplicationJsonResults.prototype, "totalReporterReplyCommentsReturned", void 0);
    return GetUserContentUrlJson200ApplicationJsonResults;
}(SpeakeasyBase));
export { GetUserContentUrlJson200ApplicationJsonResults };
var GetUserContentUrlJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserContentUrlJson200ApplicationJson, _super);
    function GetUserContentUrlJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debug" }),
        __metadata("design:type", GetUserContentUrlJson200ApplicationJsonDebug)
    ], GetUserContentUrlJson200ApplicationJson.prototype, "debug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", GetUserContentUrlJson200ApplicationJsonResults)
    ], GetUserContentUrlJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentUrlJson200ApplicationJson.prototype, "status", void 0);
    return GetUserContentUrlJson200ApplicationJson;
}(SpeakeasyBase));
export { GetUserContentUrlJson200ApplicationJson };
var GetUserContentUrlJsonRequest = /** @class */ (function (_super) {
    __extends(GetUserContentUrlJsonRequest, _super);
    function GetUserContentUrlJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentUrlJsonQueryParams)
    ], GetUserContentUrlJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentUrlJsonSecurity)
    ], GetUserContentUrlJsonRequest.prototype, "security", void 0);
    return GetUserContentUrlJsonRequest;
}(SpeakeasyBase));
export { GetUserContentUrlJsonRequest };
var GetUserContentUrlJsonResponse = /** @class */ (function (_super) {
    __extends(GetUserContentUrlJsonResponse, _super);
    function GetUserContentUrlJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserContentUrlJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentUrlJson200ApplicationJson)
    ], GetUserContentUrlJsonResponse.prototype, "getUserContentUrlJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserContentUrlJsonResponse.prototype, "statusCode", void 0);
    return GetUserContentUrlJsonResponse;
}(SpeakeasyBase));
export { GetUserContentUrlJsonResponse };

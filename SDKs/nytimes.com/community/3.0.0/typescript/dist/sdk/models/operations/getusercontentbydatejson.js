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
var GetUserContentByDateJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetUserContentByDateJsonQueryParams, _super);
    function GetUserContentByDateJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJsonQueryParams.prototype, "date", void 0);
    return GetUserContentByDateJsonQueryParams;
}(SpeakeasyBase));
export { GetUserContentByDateJsonQueryParams };
var GetUserContentByDateJsonSecurity = /** @class */ (function (_super) {
    __extends(GetUserContentByDateJsonSecurity, _super);
    function GetUserContentByDateJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUserContentByDateJsonSecurity.prototype, "apiKey", void 0);
    return GetUserContentByDateJsonSecurity;
}(SpeakeasyBase));
export { GetUserContentByDateJsonSecurity };
var GetUserContentByDateJson200ApplicationJsonDebug = /** @class */ (function (_super) {
    __extends(GetUserContentByDateJson200ApplicationJsonDebug, _super);
    function GetUserContentByDateJson200ApplicationJsonDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonDebug.prototype, "version", void 0);
    return GetUserContentByDateJson200ApplicationJsonDebug;
}(SpeakeasyBase));
export { GetUserContentByDateJson200ApplicationJsonDebug };
var GetUserContentByDateJson200ApplicationJsonResultsComments = /** @class */ (function (_super) {
    __extends(GetUserContentByDateJson200ApplicationJsonResultsComments, _super);
    function GetUserContentByDateJson200ApplicationJsonResultsComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approveDate" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "approveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetID" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetURL" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "assetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentBody" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "commentBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentID" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentSequence" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "commentSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentTitle" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "commentTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentType" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "commentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editorsSelection" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "editorsSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lft" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "lft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentID" }),
        __metadata("design:type", Object)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendationCount" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "recommendationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replies" }),
        __metadata("design:type", Array)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "replies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replyCount" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rgt" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "rgt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusID" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "statusId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDate" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "updateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDisplayName" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "userDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userID" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLocation" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "userLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userTitle" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userURL" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResultsComments.prototype, "userUrl", void 0);
    return GetUserContentByDateJson200ApplicationJsonResultsComments;
}(SpeakeasyBase));
export { GetUserContentByDateJson200ApplicationJsonResultsComments };
var GetUserContentByDateJson200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetUserContentByDateJson200ApplicationJsonResults, _super);
    function GetUserContentByDateJson200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_timestamp" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJsonResults.prototype, "apiTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments", elemType: GetUserContentByDateJson200ApplicationJsonResultsComments }),
        __metadata("design:type", Array)
    ], GetUserContentByDateJson200ApplicationJsonResults.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCommentsFound" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResults.prototype, "totalCommentsFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCommentsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentByDateJson200ApplicationJsonResults.prototype, "totalCommentsReturned", void 0);
    return GetUserContentByDateJson200ApplicationJsonResults;
}(SpeakeasyBase));
export { GetUserContentByDateJson200ApplicationJsonResults };
var GetUserContentByDateJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserContentByDateJson200ApplicationJson, _super);
    function GetUserContentByDateJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debug" }),
        __metadata("design:type", GetUserContentByDateJson200ApplicationJsonDebug)
    ], GetUserContentByDateJson200ApplicationJson.prototype, "debug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", GetUserContentByDateJson200ApplicationJsonResults)
    ], GetUserContentByDateJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentByDateJson200ApplicationJson.prototype, "status", void 0);
    return GetUserContentByDateJson200ApplicationJson;
}(SpeakeasyBase));
export { GetUserContentByDateJson200ApplicationJson };
var GetUserContentByDateJsonRequest = /** @class */ (function (_super) {
    __extends(GetUserContentByDateJsonRequest, _super);
    function GetUserContentByDateJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentByDateJsonQueryParams)
    ], GetUserContentByDateJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentByDateJsonSecurity)
    ], GetUserContentByDateJsonRequest.prototype, "security", void 0);
    return GetUserContentByDateJsonRequest;
}(SpeakeasyBase));
export { GetUserContentByDateJsonRequest };
var GetUserContentByDateJsonResponse = /** @class */ (function (_super) {
    __extends(GetUserContentByDateJsonResponse, _super);
    function GetUserContentByDateJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserContentByDateJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentByDateJson200ApplicationJson)
    ], GetUserContentByDateJsonResponse.prototype, "getUserContentByDateJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserContentByDateJsonResponse.prototype, "statusCode", void 0);
    return GetUserContentByDateJsonResponse;
}(SpeakeasyBase));
export { GetUserContentByDateJsonResponse };

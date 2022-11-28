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
var GetUserContentUserJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetUserContentUserJsonQueryParams, _super);
    function GetUserContentUserJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJsonQueryParams.prototype, "userId", void 0);
    return GetUserContentUserJsonQueryParams;
}(SpeakeasyBase));
export { GetUserContentUserJsonQueryParams };
var GetUserContentUserJsonSecurity = /** @class */ (function (_super) {
    __extends(GetUserContentUserJsonSecurity, _super);
    function GetUserContentUserJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUserContentUserJsonSecurity.prototype, "apiKey", void 0);
    return GetUserContentUserJsonSecurity;
}(SpeakeasyBase));
export { GetUserContentUserJsonSecurity };
var GetUserContentUserJson200ApplicationJsonDebug = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonDebug, _super);
    function GetUserContentUserJson200ApplicationJsonDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonDebug.prototype, "version", void 0);
    return GetUserContentUserJson200ApplicationJsonDebug;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonDebug };
var GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties, _super);
    function GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Array)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "properties", void 0);
    return GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties };
var GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels, _super);
    function GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels.prototype, "labelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelName" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels.prototype, "labelName", void 0);
    return GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels };
var GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff, _super);
    function GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff.prototype, "taxonomyId", void 0);
    return GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff };
var GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc, _super);
    function GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc.prototype, "taxonomyId", void 0);
    return GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc };
var GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn, _super);
    function GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn.prototype, "taxonomyId", void 0);
    return GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn };
var GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties, _super);
    function GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automoderation-off" }),
        __metadata("design:type", GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "automoderationOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment-list-sort-approvedate-desc" }),
        __metadata("design:type", GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "commentListSortApprovedateDesc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reached-max-com-on" }),
        __metadata("design:type", GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "reachedMaxComOn", void 0);
    return GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties };
var GetUserContentUserJson200ApplicationJsonResultsCommentsAsset = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResultsCommentsAsset, _super);
    function GetUserContentUserJson200ApplicationJsonResultsCommentsAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all-properties", elemType: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties }),
        __metadata("design:type", Array)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "allProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetTitle" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "assetTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetURL" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "assetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels }),
        __metadata("design:type", Array)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomy" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "taxonomy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Array)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDate" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "updateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendorID" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsCommentsAsset.prototype, "vendorId", void 0);
    return GetUserContentUserJson200ApplicationJsonResultsCommentsAsset;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResultsCommentsAsset };
var GetUserContentUserJson200ApplicationJsonResultsComments = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResultsComments, _super);
    function GetUserContentUserJson200ApplicationJsonResultsComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approveDate" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "approveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset" }),
        __metadata("design:type", GetUserContentUserJson200ApplicationJsonResultsCommentsAsset)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "asset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentBody" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "commentBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentSequence" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "commentSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentTitle" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "commentTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentType" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "commentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editorsSelection" }),
        __metadata("design:type", Boolean)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "editorsSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentID" }),
        __metadata("design:type", Object)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permid" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "permid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=picURL" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "picUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendations" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "recommendations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replies" }),
        __metadata("design:type", Array)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "replies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replyCount" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDate" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "updateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDisplayName" }),
        __metadata("design:type", Object)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userID" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLocation" }),
        __metadata("design:type", Object)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSubmittedDisplayName" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userSubmittedDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSubmittedLocation" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userSubmittedLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSubmittedTitle" }),
        __metadata("design:type", Object)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userSubmittedTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSubmittedURL" }),
        __metadata("design:type", Object)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userSubmittedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userTitle" }),
        __metadata("design:type", Object)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userURL" }),
        __metadata("design:type", Object)
    ], GetUserContentUserJson200ApplicationJsonResultsComments.prototype, "userUrl", void 0);
    return GetUserContentUserJson200ApplicationJsonResultsComments;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResultsComments };
var GetUserContentUserJson200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJsonResults, _super);
    function GetUserContentUserJson200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_timestamp" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJsonResults.prototype, "apiTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments", elemType: GetUserContentUserJson200ApplicationJsonResultsComments }),
        __metadata("design:type", Array)
    ], GetUserContentUserJson200ApplicationJsonResults.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCommentsFound" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResults.prototype, "totalCommentsFound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCommentsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentUserJson200ApplicationJsonResults.prototype, "totalCommentsReturned", void 0);
    return GetUserContentUserJson200ApplicationJsonResults;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJsonResults };
var GetUserContentUserJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserContentUserJson200ApplicationJson, _super);
    function GetUserContentUserJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debug" }),
        __metadata("design:type", GetUserContentUserJson200ApplicationJsonDebug)
    ], GetUserContentUserJson200ApplicationJson.prototype, "debug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", GetUserContentUserJson200ApplicationJsonResults)
    ], GetUserContentUserJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentUserJson200ApplicationJson.prototype, "status", void 0);
    return GetUserContentUserJson200ApplicationJson;
}(SpeakeasyBase));
export { GetUserContentUserJson200ApplicationJson };
var GetUserContentUserJsonRequest = /** @class */ (function (_super) {
    __extends(GetUserContentUserJsonRequest, _super);
    function GetUserContentUserJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentUserJsonQueryParams)
    ], GetUserContentUserJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentUserJsonSecurity)
    ], GetUserContentUserJsonRequest.prototype, "security", void 0);
    return GetUserContentUserJsonRequest;
}(SpeakeasyBase));
export { GetUserContentUserJsonRequest };
var GetUserContentUserJsonResponse = /** @class */ (function (_super) {
    __extends(GetUserContentUserJsonResponse, _super);
    function GetUserContentUserJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserContentUserJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentUserJson200ApplicationJson)
    ], GetUserContentUserJsonResponse.prototype, "getUserContentUserJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserContentUserJsonResponse.prototype, "statusCode", void 0);
    return GetUserContentUserJsonResponse;
}(SpeakeasyBase));
export { GetUserContentUserJsonResponse };

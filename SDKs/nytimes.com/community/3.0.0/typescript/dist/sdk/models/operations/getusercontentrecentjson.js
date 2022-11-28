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
var GetUserContentRecentJsonSecurity = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJsonSecurity, _super);
    function GetUserContentRecentJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUserContentRecentJsonSecurity.prototype, "apiKey", void 0);
    return GetUserContentRecentJsonSecurity;
}(SpeakeasyBase));
export { GetUserContentRecentJsonSecurity };
var GetUserContentRecentJson200ApplicationJsonDebug = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonDebug, _super);
    function GetUserContentRecentJson200ApplicationJsonDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonDebug.prototype, "version", void 0);
    return GetUserContentRecentJson200ApplicationJsonDebug;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonDebug };
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties.prototype, "properties", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties };
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn.prototype, "taxonomyId", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn };
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors.prototype, "taxonomyId", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors };
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomyID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff.prototype, "taxonomyId", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff };
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automoderation-on" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "automoderationOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment-list-sort-editors" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "commentListSortEditors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reached-max-com-off" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties.prototype, "reachedMaxComOff", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties };
var GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all-properties", elemType: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "allProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetTitle" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "assetTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetURL" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "assetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomy" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "taxonomy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "updateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendorID" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset.prototype, "vendorId", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset };
var GetUserContentRecentJson200ApplicationJsonResultsComments = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResultsComments, _super);
    function GetUserContentRecentJson200ApplicationJsonResultsComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approveDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "approveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "asset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentBody" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentSequence" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentSequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentTitle" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commentType" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "commentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "createDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editorsSelection" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "editorsSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentID" }),
        __metadata("design:type", Object)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendationCount" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "recommendationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replies" }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "replies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "statusId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDate" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "updateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDisplayName" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userID" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLocation" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userTitle" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userURL" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResultsComments.prototype, "userUrl", void 0);
    return GetUserContentRecentJson200ApplicationJsonResultsComments;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonResultsComments };
var GetUserContentRecentJson200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJsonResults, _super);
    function GetUserContentRecentJson200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_timestamp" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJsonResults.prototype, "apiTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments", elemType: GetUserContentRecentJson200ApplicationJsonResultsComments }),
        __metadata("design:type", Array)
    ], GetUserContentRecentJson200ApplicationJsonResults.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCommentsReturned" }),
        __metadata("design:type", Number)
    ], GetUserContentRecentJson200ApplicationJsonResults.prototype, "totalCommentsReturned", void 0);
    return GetUserContentRecentJson200ApplicationJsonResults;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJsonResults };
var GetUserContentRecentJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJson200ApplicationJson, _super);
    function GetUserContentRecentJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debug" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonDebug)
    ], GetUserContentRecentJson200ApplicationJson.prototype, "debug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJsonResults)
    ], GetUserContentRecentJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUserContentRecentJson200ApplicationJson.prototype, "status", void 0);
    return GetUserContentRecentJson200ApplicationJson;
}(SpeakeasyBase));
export { GetUserContentRecentJson200ApplicationJson };
var GetUserContentRecentJsonRequest = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJsonRequest, _super);
    function GetUserContentRecentJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentRecentJsonSecurity)
    ], GetUserContentRecentJsonRequest.prototype, "security", void 0);
    return GetUserContentRecentJsonRequest;
}(SpeakeasyBase));
export { GetUserContentRecentJsonRequest };
var GetUserContentRecentJsonResponse = /** @class */ (function (_super) {
    __extends(GetUserContentRecentJsonResponse, _super);
    function GetUserContentRecentJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserContentRecentJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserContentRecentJson200ApplicationJson)
    ], GetUserContentRecentJsonResponse.prototype, "getUserContentRecentJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserContentRecentJsonResponse.prototype, "statusCode", void 0);
    return GetUserContentRecentJsonResponse;
}(SpeakeasyBase));
export { GetUserContentRecentJsonResponse };

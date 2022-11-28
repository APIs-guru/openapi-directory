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
import { Expr } from "./expr";
import { FeedOutputConfig } from "./feedoutputconfig";
export var FeedContentTypeEnum;
(function (FeedContentTypeEnum) {
    FeedContentTypeEnum["ContentTypeUnspecified"] = "CONTENT_TYPE_UNSPECIFIED";
    FeedContentTypeEnum["Resource"] = "RESOURCE";
    FeedContentTypeEnum["IamPolicy"] = "IAM_POLICY";
    FeedContentTypeEnum["OrgPolicy"] = "ORG_POLICY";
    FeedContentTypeEnum["AccessPolicy"] = "ACCESS_POLICY";
    FeedContentTypeEnum["OsInventory"] = "OS_INVENTORY";
    FeedContentTypeEnum["Relationship"] = "RELATIONSHIP";
})(FeedContentTypeEnum || (FeedContentTypeEnum = {}));
// Feed
/**
 * An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
**/
var Feed = /** @class */ (function (_super) {
    __extends(Feed, _super);
    function Feed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetNames" }),
        __metadata("design:type", Array)
    ], Feed.prototype, "assetNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetTypes" }),
        __metadata("design:type", Array)
    ], Feed.prototype, "assetTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", Expr)
    ], Feed.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], Feed.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedOutputConfig" }),
        __metadata("design:type", FeedOutputConfig)
    ], Feed.prototype, "feedOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Feed.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationshipTypes" }),
        __metadata("design:type", Array)
    ], Feed.prototype, "relationshipTypes", void 0);
    return Feed;
}(SpeakeasyBase));
export { Feed };

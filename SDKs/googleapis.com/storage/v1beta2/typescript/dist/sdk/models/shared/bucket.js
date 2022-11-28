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
import { BucketAccessControl } from "./bucketaccesscontrol";
import { ObjectAccessControl } from "./objectaccesscontrol";
var BucketCors = /** @class */ (function (_super) {
    __extends(BucketCors, _super);
    function BucketCors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAgeSeconds" }),
        __metadata("design:type", Number)
    ], BucketCors.prototype, "maxAgeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", Array)
    ], BucketCors.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", Array)
    ], BucketCors.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseHeader" }),
        __metadata("design:type", Array)
    ], BucketCors.prototype, "responseHeader", void 0);
    return BucketCors;
}(SpeakeasyBase));
export { BucketCors };
// BucketLifecycleRuleAction
/**
 * The action to take.
**/
var BucketLifecycleRuleAction = /** @class */ (function (_super) {
    __extends(BucketLifecycleRuleAction, _super);
    function BucketLifecycleRuleAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BucketLifecycleRuleAction.prototype, "type", void 0);
    return BucketLifecycleRuleAction;
}(SpeakeasyBase));
export { BucketLifecycleRuleAction };
// BucketLifecycleRuleCondition
/**
 * The condition(s) under which the action will be taken.
**/
var BucketLifecycleRuleCondition = /** @class */ (function (_super) {
    __extends(BucketLifecycleRuleCondition, _super);
    function BucketLifecycleRuleCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=age" }),
        __metadata("design:type", Number)
    ], BucketLifecycleRuleCondition.prototype, "age", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBefore" }),
        __metadata("design:type", Date)
    ], BucketLifecycleRuleCondition.prototype, "createdBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLive" }),
        __metadata("design:type", Boolean)
    ], BucketLifecycleRuleCondition.prototype, "isLive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numNewerVersions" }),
        __metadata("design:type", Number)
    ], BucketLifecycleRuleCondition.prototype, "numNewerVersions", void 0);
    return BucketLifecycleRuleCondition;
}(SpeakeasyBase));
export { BucketLifecycleRuleCondition };
var BucketLifecycleRule = /** @class */ (function (_super) {
    __extends(BucketLifecycleRule, _super);
    function BucketLifecycleRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", BucketLifecycleRuleAction)
    ], BucketLifecycleRule.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", BucketLifecycleRuleCondition)
    ], BucketLifecycleRule.prototype, "condition", void 0);
    return BucketLifecycleRule;
}(SpeakeasyBase));
export { BucketLifecycleRule };
// BucketLifecycle
/**
 * The bucket's lifecycle configuration. See object lifecycle management for more information.
**/
var BucketLifecycle = /** @class */ (function (_super) {
    __extends(BucketLifecycle, _super);
    function BucketLifecycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule", elemType: BucketLifecycleRule }),
        __metadata("design:type", Array)
    ], BucketLifecycle.prototype, "rule", void 0);
    return BucketLifecycle;
}(SpeakeasyBase));
export { BucketLifecycle };
// BucketLogging
/**
 * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
**/
var BucketLogging = /** @class */ (function (_super) {
    __extends(BucketLogging, _super);
    function BucketLogging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logBucket" }),
        __metadata("design:type", String)
    ], BucketLogging.prototype, "logBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logObjectPrefix" }),
        __metadata("design:type", String)
    ], BucketLogging.prototype, "logObjectPrefix", void 0);
    return BucketLogging;
}(SpeakeasyBase));
export { BucketLogging };
// BucketOwner
/**
 * The owner of the bucket. This is always the project team's owner group.
**/
var BucketOwner = /** @class */ (function (_super) {
    __extends(BucketOwner, _super);
    function BucketOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", String)
    ], BucketOwner.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityId" }),
        __metadata("design:type", String)
    ], BucketOwner.prototype, "entityId", void 0);
    return BucketOwner;
}(SpeakeasyBase));
export { BucketOwner };
// BucketVersioning
/**
 * The bucket's versioning configuration.
**/
var BucketVersioning = /** @class */ (function (_super) {
    __extends(BucketVersioning, _super);
    function BucketVersioning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], BucketVersioning.prototype, "enabled", void 0);
    return BucketVersioning;
}(SpeakeasyBase));
export { BucketVersioning };
// BucketWebsite
/**
 * The bucket's website configuration.
**/
var BucketWebsite = /** @class */ (function (_super) {
    __extends(BucketWebsite, _super);
    function BucketWebsite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainPageSuffix" }),
        __metadata("design:type", String)
    ], BucketWebsite.prototype, "mainPageSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notFoundPage" }),
        __metadata("design:type", String)
    ], BucketWebsite.prototype, "notFoundPage", void 0);
    return BucketWebsite;
}(SpeakeasyBase));
export { BucketWebsite };
// Bucket
/**
 * A bucket.
**/
var Bucket = /** @class */ (function (_super) {
    __extends(Bucket, _super);
    function Bucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl", elemType: BucketAccessControl }),
        __metadata("design:type", Array)
    ], Bucket.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cors", elemType: BucketCors }),
        __metadata("design:type", Array)
    ], Bucket.prototype, "cors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultObjectAcl", elemType: ObjectAccessControl }),
        __metadata("design:type", Array)
    ], Bucket.prototype, "defaultObjectAcl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycle" }),
        __metadata("design:type", BucketLifecycle)
    ], Bucket.prototype, "lifecycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", BucketLogging)
    ], Bucket.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metageneration" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "metageneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", BucketOwner)
    ], Bucket.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageClass" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "storageClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeCreated" }),
        __metadata("design:type", Date)
    ], Bucket.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versioning" }),
        __metadata("design:type", BucketVersioning)
    ], Bucket.prototype, "versioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", BucketWebsite)
    ], Bucket.prototype, "website", void 0);
    return Bucket;
}(SpeakeasyBase));
export { Bucket };

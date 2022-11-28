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
import { RestMethod } from "./restmethod";
import { JsonSchema } from "./jsonschema";
import { RestResource } from "./restresource";
// RestDescriptionAuthOauth2Scopes
/**
 * The scope value.
**/
var RestDescriptionAuthOauth2Scopes = /** @class */ (function (_super) {
    __extends(RestDescriptionAuthOauth2Scopes, _super);
    function RestDescriptionAuthOauth2Scopes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RestDescriptionAuthOauth2Scopes.prototype, "description", void 0);
    return RestDescriptionAuthOauth2Scopes;
}(SpeakeasyBase));
export { RestDescriptionAuthOauth2Scopes };
// RestDescriptionAuthOauth2
/**
 * OAuth 2.0 authentication information.
**/
var RestDescriptionAuthOauth2 = /** @class */ (function (_super) {
    __extends(RestDescriptionAuthOauth2, _super);
    function RestDescriptionAuthOauth2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes", elemType: RestDescriptionAuthOauth2Scopes }),
        __metadata("design:type", Map)
    ], RestDescriptionAuthOauth2.prototype, "scopes", void 0);
    return RestDescriptionAuthOauth2;
}(SpeakeasyBase));
export { RestDescriptionAuthOauth2 };
// RestDescriptionAuth
/**
 * Authentication information.
**/
var RestDescriptionAuth = /** @class */ (function (_super) {
    __extends(RestDescriptionAuth, _super);
    function RestDescriptionAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth2" }),
        __metadata("design:type", RestDescriptionAuthOauth2)
    ], RestDescriptionAuth.prototype, "oauth2", void 0);
    return RestDescriptionAuth;
}(SpeakeasyBase));
export { RestDescriptionAuth };
// RestDescriptionIcons
/**
 * Links to 16x16 and 32x32 icons representing the API.
**/
var RestDescriptionIcons = /** @class */ (function (_super) {
    __extends(RestDescriptionIcons, _super);
    function RestDescriptionIcons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x16" }),
        __metadata("design:type", String)
    ], RestDescriptionIcons.prototype, "x16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x32" }),
        __metadata("design:type", String)
    ], RestDescriptionIcons.prototype, "x32", void 0);
    return RestDescriptionIcons;
}(SpeakeasyBase));
export { RestDescriptionIcons };
var RestDescription = /** @class */ (function (_super) {
    __extends(RestDescription, _super);
    function RestDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth" }),
        __metadata("design:type", RestDescriptionAuth)
    ], RestDescription.prototype, "auth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basePath" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "basePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseUrl" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "baseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchPath" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "batchPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalName" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "canonicalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoveryVersion" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "discoveryVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentationLink" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "documentationLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exponentialBackoffDefault" }),
        __metadata("design:type", Boolean)
    ], RestDescription.prototype, "exponentialBackoffDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", Array)
    ], RestDescription.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icons" }),
        __metadata("design:type", RestDescriptionIcons)
    ], RestDescription.prototype, "icons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], RestDescription.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=methods", elemType: RestMethod }),
        __metadata("design:type", Map)
    ], RestDescription.prototype, "methods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerDomain" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "ownerDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerName" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "ownerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packagePath" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "packagePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: JsonSchema }),
        __metadata("design:type", Map)
    ], RestDescription.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: RestResource }),
        __metadata("design:type", Map)
    ], RestDescription.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootUrl" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "rootUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas", elemType: JsonSchema }),
        __metadata("design:type", Map)
    ], RestDescription.prototype, "schemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicePath" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "servicePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], RestDescription.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version_module" }),
        __metadata("design:type", Boolean)
    ], RestDescription.prototype, "versionModule", void 0);
    return RestDescription;
}(SpeakeasyBase));
export { RestDescription };

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
import { Credential } from "./credential";
import { Operation } from "./operation";
import { Options } from "./options";
// TypeProvider
/**
 * A type provider that describes a service-backed Type.
**/
var TypeProvider = /** @class */ (function (_super) {
    __extends(TypeProvider, _super);
    function TypeProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=collectionOverrides", elemType: shared.CollectionOverride }),
        __metadata("design:type", Array)
    ], TypeProvider.prototype, "collectionOverrides", void 0);
    __decorate([
        Metadata({ data: "json, name=credential" }),
        __metadata("design:type", Credential)
    ], TypeProvider.prototype, "credential", void 0);
    __decorate([
        Metadata({ data: "json, name=customCertificateAuthorityRoots" }),
        __metadata("design:type", Array)
    ], TypeProvider.prototype, "customCertificateAuthorityRoots", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TypeProvider.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=descriptorUrl" }),
        __metadata("design:type", String)
    ], TypeProvider.prototype, "descriptorUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TypeProvider.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=insertTime" }),
        __metadata("design:type", String)
    ], TypeProvider.prototype, "insertTime", void 0);
    __decorate([
        Metadata({ data: "json, name=labels", elemType: shared.TypeProviderLabelEntry }),
        __metadata("design:type", Array)
    ], TypeProvider.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TypeProvider.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=operation" }),
        __metadata("design:type", Operation)
    ], TypeProvider.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "json, name=options" }),
        __metadata("design:type", Options)
    ], TypeProvider.prototype, "options", void 0);
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], TypeProvider.prototype, "selfLink", void 0);
    return TypeProvider;
}(SpeakeasyBase));
export { TypeProvider };

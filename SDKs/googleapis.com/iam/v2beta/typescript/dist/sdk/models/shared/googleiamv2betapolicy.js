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
// GoogleIamV2betaPolicy
/**
 * Data for an IAM policy.
**/
var GoogleIamV2betaPolicy = /** @class */ (function (_super) {
    __extends(GoogleIamV2betaPolicy, _super);
    function GoogleIamV2betaPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleIamV2betaPolicy.prototype, "annotations", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleIamV2betaPolicy.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], GoogleIamV2betaPolicy.prototype, "deleteTime", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleIamV2betaPolicy.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleIamV2betaPolicy.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], GoogleIamV2betaPolicy.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleIamV2betaPolicy.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=rules", elemType: shared.GoogleIamV2betaPolicyRule }),
        __metadata("design:type", Array)
    ], GoogleIamV2betaPolicy.prototype, "rules", void 0);
    __decorate([
        Metadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleIamV2betaPolicy.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleIamV2betaPolicy.prototype, "updateTime", void 0);
    return GoogleIamV2betaPolicy;
}(SpeakeasyBase));
export { GoogleIamV2betaPolicy };

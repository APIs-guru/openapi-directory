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
import { UserInfo } from "./userinfo";
// IdentitytoolkitRelyingpartyUploadAccountRequest
/**
 * Request to upload user account in batch.
**/
var IdentitytoolkitRelyingpartyUploadAccountRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyUploadAccountRequest, _super);
    function IdentitytoolkitRelyingpartyUploadAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowOverwrite" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "allowOverwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockSize" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "blockSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuMemCost" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "cpuMemCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "delegatedProjectNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dkLen" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "dkLen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashAlgorithm" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "hashAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryCost" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "memoryCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallelization" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "parallelization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rounds" }),
        __metadata("design:type", Number)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "rounds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saltSeparator" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "saltSeparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sanityCheck" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "sanityCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signerKey" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "signerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetProjectId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "targetProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: UserInfo }),
        __metadata("design:type", Array)
    ], IdentitytoolkitRelyingpartyUploadAccountRequest.prototype, "users", void 0);
    return IdentitytoolkitRelyingpartyUploadAccountRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyUploadAccountRequest };

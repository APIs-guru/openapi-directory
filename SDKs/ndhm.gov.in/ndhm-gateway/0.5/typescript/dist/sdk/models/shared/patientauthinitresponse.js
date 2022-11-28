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
import { AuthMeta } from "./authmeta";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
var PatientAuthInitResponseAuth = /** @class */ (function (_super) {
    __extends(PatientAuthInitResponseAuth, _super);
    function PatientAuthInitResponseAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", AuthMeta)
    ], PatientAuthInitResponseAuth.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], PatientAuthInitResponseAuth.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], PatientAuthInitResponseAuth.prototype, "transactionId", void 0);
    return PatientAuthInitResponseAuth;
}(SpeakeasyBase));
export { PatientAuthInitResponseAuth };
var PatientAuthInitResponse = /** @class */ (function (_super) {
    __extends(PatientAuthInitResponse, _super);
    function PatientAuthInitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth" }),
        __metadata("design:type", PatientAuthInitResponseAuth)
    ], PatientAuthInitResponse.prototype, "auth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Error)
    ], PatientAuthInitResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], PatientAuthInitResponse.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resp" }),
        __metadata("design:type", RequestReference)
    ], PatientAuthInitResponse.prototype, "resp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], PatientAuthInitResponse.prototype, "timestamp", void 0);
    return PatientAuthInitResponse;
}(SpeakeasyBase));
export { PatientAuthInitResponse };

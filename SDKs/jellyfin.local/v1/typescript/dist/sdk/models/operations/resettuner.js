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
var ResetTunerPathParams = /** @class */ (function (_super) {
    __extends(ResetTunerPathParams, _super);
    function ResetTunerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tunerId" }),
        __metadata("design:type", String)
    ], ResetTunerPathParams.prototype, "tunerId", void 0);
    return ResetTunerPathParams;
}(SpeakeasyBase));
export { ResetTunerPathParams };
var ResetTunerSecurity = /** @class */ (function (_super) {
    __extends(ResetTunerSecurity, _super);
    function ResetTunerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], ResetTunerSecurity.prototype, "customAuthentication", void 0);
    return ResetTunerSecurity;
}(SpeakeasyBase));
export { ResetTunerSecurity };
var ResetTunerRequest = /** @class */ (function (_super) {
    __extends(ResetTunerRequest, _super);
    function ResetTunerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetTunerPathParams)
    ], ResetTunerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetTunerSecurity)
    ], ResetTunerRequest.prototype, "security", void 0);
    return ResetTunerRequest;
}(SpeakeasyBase));
export { ResetTunerRequest };
var ResetTunerResponse = /** @class */ (function (_super) {
    __extends(ResetTunerResponse, _super);
    function ResetTunerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResetTunerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResetTunerResponse.prototype, "statusCode", void 0);
    return ResetTunerResponse;
}(SpeakeasyBase));
export { ResetTunerResponse };

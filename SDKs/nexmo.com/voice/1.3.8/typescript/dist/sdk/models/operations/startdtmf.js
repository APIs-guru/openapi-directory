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
var StartDtmfPathParams = /** @class */ (function (_super) {
    __extends(StartDtmfPathParams, _super);
    function StartDtmfPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" }),
        __metadata("design:type", String)
    ], StartDtmfPathParams.prototype, "uuid", void 0);
    return StartDtmfPathParams;
}(SpeakeasyBase));
export { StartDtmfPathParams };
var StartDtmfSecurity = /** @class */ (function (_super) {
    __extends(StartDtmfSecurity, _super);
    function StartDtmfSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], StartDtmfSecurity.prototype, "bearerAuth", void 0);
    return StartDtmfSecurity;
}(SpeakeasyBase));
export { StartDtmfSecurity };
var StartDtmfRequest = /** @class */ (function (_super) {
    __extends(StartDtmfRequest, _super);
    function StartDtmfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartDtmfPathParams)
    ], StartDtmfRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DtmfRequest)
    ], StartDtmfRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StartDtmfSecurity)
    ], StartDtmfRequest.prototype, "security", void 0);
    return StartDtmfRequest;
}(SpeakeasyBase));
export { StartDtmfRequest };
var StartDtmfResponse = /** @class */ (function (_super) {
    __extends(StartDtmfResponse, _super);
    function StartDtmfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartDtmfResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DtmfResponse)
    ], StartDtmfResponse.prototype, "dtmfResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartDtmfResponse.prototype, "statusCode", void 0);
    return StartDtmfResponse;
}(SpeakeasyBase));
export { StartDtmfResponse };

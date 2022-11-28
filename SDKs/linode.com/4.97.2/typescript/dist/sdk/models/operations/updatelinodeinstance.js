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
var UpdateLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(UpdateLinodeInstancePathParams, _super);
    function UpdateLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], UpdateLinodeInstancePathParams.prototype, "linodeId", void 0);
    return UpdateLinodeInstancePathParams;
}(SpeakeasyBase));
export { UpdateLinodeInstancePathParams };
var UpdateLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(UpdateLinodeInstanceSecurity, _super);
    function UpdateLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateLinodeInstanceSecurity.prototype, "oauth", void 0);
    return UpdateLinodeInstanceSecurity;
}(SpeakeasyBase));
export { UpdateLinodeInstanceSecurity };
var UpdateLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateLinodeInstanceDefaultApplicationJson, _super);
    function UpdateLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateLinodeInstanceDefaultApplicationJson };
var UpdateLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(UpdateLinodeInstanceRequest, _super);
    function UpdateLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLinodeInstancePathParams)
    ], UpdateLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LinodeInput)
    ], UpdateLinodeInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLinodeInstanceSecurity)
    ], UpdateLinodeInstanceRequest.prototype, "security", void 0);
    return UpdateLinodeInstanceRequest;
}(SpeakeasyBase));
export { UpdateLinodeInstanceRequest };
var UpdateLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(UpdateLinodeInstanceResponse, _super);
    function UpdateLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Linode)
    ], UpdateLinodeInstanceResponse.prototype, "linode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLinodeInstanceDefaultApplicationJson)
    ], UpdateLinodeInstanceResponse.prototype, "updateLinodeInstanceDefaultApplicationJsonObject", void 0);
    return UpdateLinodeInstanceResponse;
}(SpeakeasyBase));
export { UpdateLinodeInstanceResponse };

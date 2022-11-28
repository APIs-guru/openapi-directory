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
var UpdateLongviewClientPathParams = /** @class */ (function (_super) {
    __extends(UpdateLongviewClientPathParams, _super);
    function UpdateLongviewClientPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", Number)
    ], UpdateLongviewClientPathParams.prototype, "clientId", void 0);
    return UpdateLongviewClientPathParams;
}(SpeakeasyBase));
export { UpdateLongviewClientPathParams };
var UpdateLongviewClientSecurity = /** @class */ (function (_super) {
    __extends(UpdateLongviewClientSecurity, _super);
    function UpdateLongviewClientSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateLongviewClientSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateLongviewClientSecurity.prototype, "oauth", void 0);
    return UpdateLongviewClientSecurity;
}(SpeakeasyBase));
export { UpdateLongviewClientSecurity };
var UpdateLongviewClientDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateLongviewClientDefaultApplicationJson, _super);
    function UpdateLongviewClientDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateLongviewClientDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateLongviewClientDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateLongviewClientDefaultApplicationJson };
var UpdateLongviewClientRequest = /** @class */ (function (_super) {
    __extends(UpdateLongviewClientRequest, _super);
    function UpdateLongviewClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLongviewClientPathParams)
    ], UpdateLongviewClientRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LongviewClientInput)
    ], UpdateLongviewClientRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLongviewClientSecurity)
    ], UpdateLongviewClientRequest.prototype, "security", void 0);
    return UpdateLongviewClientRequest;
}(SpeakeasyBase));
export { UpdateLongviewClientRequest };
var UpdateLongviewClientResponse = /** @class */ (function (_super) {
    __extends(UpdateLongviewClientResponse, _super);
    function UpdateLongviewClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateLongviewClientResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LongviewClient)
    ], UpdateLongviewClientResponse.prototype, "longviewClient", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateLongviewClientResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLongviewClientDefaultApplicationJson)
    ], UpdateLongviewClientResponse.prototype, "updateLongviewClientDefaultApplicationJsonObject", void 0);
    return UpdateLongviewClientResponse;
}(SpeakeasyBase));
export { UpdateLongviewClientResponse };

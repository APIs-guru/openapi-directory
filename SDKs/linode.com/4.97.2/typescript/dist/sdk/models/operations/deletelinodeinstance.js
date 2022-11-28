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
var DeleteLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(DeleteLinodeInstancePathParams, _super);
    function DeleteLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], DeleteLinodeInstancePathParams.prototype, "linodeId", void 0);
    return DeleteLinodeInstancePathParams;
}(SpeakeasyBase));
export { DeleteLinodeInstancePathParams };
var DeleteLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(DeleteLinodeInstanceSecurity, _super);
    function DeleteLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteLinodeInstanceSecurity.prototype, "oauth", void 0);
    return DeleteLinodeInstanceSecurity;
}(SpeakeasyBase));
export { DeleteLinodeInstanceSecurity };
var DeleteLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteLinodeInstanceDefaultApplicationJson, _super);
    function DeleteLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteLinodeInstanceDefaultApplicationJson };
var DeleteLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(DeleteLinodeInstanceRequest, _super);
    function DeleteLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLinodeInstancePathParams)
    ], DeleteLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLinodeInstanceSecurity)
    ], DeleteLinodeInstanceRequest.prototype, "security", void 0);
    return DeleteLinodeInstanceRequest;
}(SpeakeasyBase));
export { DeleteLinodeInstanceRequest };
var DeleteLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(DeleteLinodeInstanceResponse, _super);
    function DeleteLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteLinodeInstanceResponse.prototype, "deleteLinodeInstance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLinodeInstanceDefaultApplicationJson)
    ], DeleteLinodeInstanceResponse.prototype, "deleteLinodeInstanceDefaultApplicationJsonObject", void 0);
    return DeleteLinodeInstanceResponse;
}(SpeakeasyBase));
export { DeleteLinodeInstanceResponse };

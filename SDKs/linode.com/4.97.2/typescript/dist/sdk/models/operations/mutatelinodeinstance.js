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
var MutateLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(MutateLinodeInstancePathParams, _super);
    function MutateLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], MutateLinodeInstancePathParams.prototype, "linodeId", void 0);
    return MutateLinodeInstancePathParams;
}(SpeakeasyBase));
export { MutateLinodeInstancePathParams };
var MutateLinodeInstanceRequestBody = /** @class */ (function (_super) {
    __extends(MutateLinodeInstanceRequestBody, _super);
    function MutateLinodeInstanceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_auto_disk_resize" }),
        __metadata("design:type", Boolean)
    ], MutateLinodeInstanceRequestBody.prototype, "allowAutoDiskResize", void 0);
    return MutateLinodeInstanceRequestBody;
}(SpeakeasyBase));
export { MutateLinodeInstanceRequestBody };
var MutateLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(MutateLinodeInstanceSecurity, _super);
    function MutateLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], MutateLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], MutateLinodeInstanceSecurity.prototype, "oauth", void 0);
    return MutateLinodeInstanceSecurity;
}(SpeakeasyBase));
export { MutateLinodeInstanceSecurity };
var MutateLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(MutateLinodeInstanceDefaultApplicationJson, _super);
    function MutateLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], MutateLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return MutateLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { MutateLinodeInstanceDefaultApplicationJson };
var MutateLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(MutateLinodeInstanceRequest, _super);
    function MutateLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MutateLinodeInstancePathParams)
    ], MutateLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MutateLinodeInstanceRequestBody)
    ], MutateLinodeInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MutateLinodeInstanceSecurity)
    ], MutateLinodeInstanceRequest.prototype, "security", void 0);
    return MutateLinodeInstanceRequest;
}(SpeakeasyBase));
export { MutateLinodeInstanceRequest };
var MutateLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(MutateLinodeInstanceResponse, _super);
    function MutateLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MutateLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MutateLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MutateLinodeInstanceResponse.prototype, "mutateLinodeInstance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MutateLinodeInstanceDefaultApplicationJson)
    ], MutateLinodeInstanceResponse.prototype, "mutateLinodeInstanceDefaultApplicationJsonObject", void 0);
    return MutateLinodeInstanceResponse;
}(SpeakeasyBase));
export { MutateLinodeInstanceResponse };

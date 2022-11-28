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
var DeleteManagedServicePathParams = /** @class */ (function (_super) {
    __extends(DeleteManagedServicePathParams, _super);
    function DeleteManagedServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", Number)
    ], DeleteManagedServicePathParams.prototype, "serviceId", void 0);
    return DeleteManagedServicePathParams;
}(SpeakeasyBase));
export { DeleteManagedServicePathParams };
var DeleteManagedServiceSecurity = /** @class */ (function (_super) {
    __extends(DeleteManagedServiceSecurity, _super);
    function DeleteManagedServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteManagedServiceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteManagedServiceSecurity.prototype, "oauth", void 0);
    return DeleteManagedServiceSecurity;
}(SpeakeasyBase));
export { DeleteManagedServiceSecurity };
var DeleteManagedServiceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteManagedServiceDefaultApplicationJson, _super);
    function DeleteManagedServiceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteManagedServiceDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteManagedServiceDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteManagedServiceDefaultApplicationJson };
var DeleteManagedServiceRequest = /** @class */ (function (_super) {
    __extends(DeleteManagedServiceRequest, _super);
    function DeleteManagedServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteManagedServicePathParams)
    ], DeleteManagedServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteManagedServiceSecurity)
    ], DeleteManagedServiceRequest.prototype, "security", void 0);
    return DeleteManagedServiceRequest;
}(SpeakeasyBase));
export { DeleteManagedServiceRequest };
var DeleteManagedServiceResponse = /** @class */ (function (_super) {
    __extends(DeleteManagedServiceResponse, _super);
    function DeleteManagedServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteManagedServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteManagedServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteManagedServiceResponse.prototype, "deleteManagedService200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteManagedServiceDefaultApplicationJson)
    ], DeleteManagedServiceResponse.prototype, "deleteManagedServiceDefaultApplicationJsonObject", void 0);
    return DeleteManagedServiceResponse;
}(SpeakeasyBase));
export { DeleteManagedServiceResponse };

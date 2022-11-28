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
var UpdateManagedContactPathParams = /** @class */ (function (_super) {
    __extends(UpdateManagedContactPathParams, _super);
    function UpdateManagedContactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" }),
        __metadata("design:type", Number)
    ], UpdateManagedContactPathParams.prototype, "contactId", void 0);
    return UpdateManagedContactPathParams;
}(SpeakeasyBase));
export { UpdateManagedContactPathParams };
var UpdateManagedContactSecurity = /** @class */ (function (_super) {
    __extends(UpdateManagedContactSecurity, _super);
    function UpdateManagedContactSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateManagedContactSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateManagedContactSecurity.prototype, "oauth", void 0);
    return UpdateManagedContactSecurity;
}(SpeakeasyBase));
export { UpdateManagedContactSecurity };
var UpdateManagedContactDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateManagedContactDefaultApplicationJson, _super);
    function UpdateManagedContactDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateManagedContactDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateManagedContactDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateManagedContactDefaultApplicationJson };
var UpdateManagedContactRequest = /** @class */ (function (_super) {
    __extends(UpdateManagedContactRequest, _super);
    function UpdateManagedContactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedContactPathParams)
    ], UpdateManagedContactRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManagedContactInput)
    ], UpdateManagedContactRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedContactSecurity)
    ], UpdateManagedContactRequest.prototype, "security", void 0);
    return UpdateManagedContactRequest;
}(SpeakeasyBase));
export { UpdateManagedContactRequest };
var UpdateManagedContactResponse = /** @class */ (function (_super) {
    __extends(UpdateManagedContactResponse, _super);
    function UpdateManagedContactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateManagedContactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedContact)
    ], UpdateManagedContactResponse.prototype, "managedContact", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateManagedContactResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedContactDefaultApplicationJson)
    ], UpdateManagedContactResponse.prototype, "updateManagedContactDefaultApplicationJsonObject", void 0);
    return UpdateManagedContactResponse;
}(SpeakeasyBase));
export { UpdateManagedContactResponse };

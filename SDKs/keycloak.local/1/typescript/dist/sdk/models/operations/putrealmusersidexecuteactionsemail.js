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
var PutRealmUsersIdExecuteActionsEmailPathParams = /** @class */ (function (_super) {
    __extends(PutRealmUsersIdExecuteActionsEmailPathParams, _super);
    function PutRealmUsersIdExecuteActionsEmailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutRealmUsersIdExecuteActionsEmailPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], PutRealmUsersIdExecuteActionsEmailPathParams.prototype, "realm", void 0);
    return PutRealmUsersIdExecuteActionsEmailPathParams;
}(SpeakeasyBase));
export { PutRealmUsersIdExecuteActionsEmailPathParams };
var PutRealmUsersIdExecuteActionsEmailQueryParams = /** @class */ (function (_super) {
    __extends(PutRealmUsersIdExecuteActionsEmailQueryParams, _super);
    function PutRealmUsersIdExecuteActionsEmailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" }),
        __metadata("design:type", String)
    ], PutRealmUsersIdExecuteActionsEmailQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lifespan" }),
        __metadata("design:type", Number)
    ], PutRealmUsersIdExecuteActionsEmailQueryParams.prototype, "lifespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" }),
        __metadata("design:type", String)
    ], PutRealmUsersIdExecuteActionsEmailQueryParams.prototype, "redirectUri", void 0);
    return PutRealmUsersIdExecuteActionsEmailQueryParams;
}(SpeakeasyBase));
export { PutRealmUsersIdExecuteActionsEmailQueryParams };
var PutRealmUsersIdExecuteActionsEmailRequest = /** @class */ (function (_super) {
    __extends(PutRealmUsersIdExecuteActionsEmailRequest, _super);
    function PutRealmUsersIdExecuteActionsEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRealmUsersIdExecuteActionsEmailPathParams)
    ], PutRealmUsersIdExecuteActionsEmailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRealmUsersIdExecuteActionsEmailQueryParams)
    ], PutRealmUsersIdExecuteActionsEmailRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Array)
    ], PutRealmUsersIdExecuteActionsEmailRequest.prototype, "request", void 0);
    return PutRealmUsersIdExecuteActionsEmailRequest;
}(SpeakeasyBase));
export { PutRealmUsersIdExecuteActionsEmailRequest };
var PutRealmUsersIdExecuteActionsEmailResponse = /** @class */ (function (_super) {
    __extends(PutRealmUsersIdExecuteActionsEmailResponse, _super);
    function PutRealmUsersIdExecuteActionsEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutRealmUsersIdExecuteActionsEmailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutRealmUsersIdExecuteActionsEmailResponse.prototype, "statusCode", void 0);
    return PutRealmUsersIdExecuteActionsEmailResponse;
}(SpeakeasyBase));
export { PutRealmUsersIdExecuteActionsEmailResponse };

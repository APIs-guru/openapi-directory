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
var PutRealmDefaultDefaultClientScopesClientScopeIdPathParams = /** @class */ (function (_super) {
    __extends(PutRealmDefaultDefaultClientScopesClientScopeIdPathParams, _super);
    function PutRealmDefaultDefaultClientScopesClientScopeIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientScopeId" }),
        __metadata("design:type", String)
    ], PutRealmDefaultDefaultClientScopesClientScopeIdPathParams.prototype, "clientScopeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], PutRealmDefaultDefaultClientScopesClientScopeIdPathParams.prototype, "realm", void 0);
    return PutRealmDefaultDefaultClientScopesClientScopeIdPathParams;
}(SpeakeasyBase));
export { PutRealmDefaultDefaultClientScopesClientScopeIdPathParams };
var PutRealmDefaultDefaultClientScopesClientScopeIdRequest = /** @class */ (function (_super) {
    __extends(PutRealmDefaultDefaultClientScopesClientScopeIdRequest, _super);
    function PutRealmDefaultDefaultClientScopesClientScopeIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutRealmDefaultDefaultClientScopesClientScopeIdPathParams)
    ], PutRealmDefaultDefaultClientScopesClientScopeIdRequest.prototype, "pathParams", void 0);
    return PutRealmDefaultDefaultClientScopesClientScopeIdRequest;
}(SpeakeasyBase));
export { PutRealmDefaultDefaultClientScopesClientScopeIdRequest };
var PutRealmDefaultDefaultClientScopesClientScopeIdResponse = /** @class */ (function (_super) {
    __extends(PutRealmDefaultDefaultClientScopesClientScopeIdResponse, _super);
    function PutRealmDefaultDefaultClientScopesClientScopeIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutRealmDefaultDefaultClientScopesClientScopeIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutRealmDefaultDefaultClientScopesClientScopeIdResponse.prototype, "statusCode", void 0);
    return PutRealmDefaultDefaultClientScopesClientScopeIdResponse;
}(SpeakeasyBase));
export { PutRealmDefaultDefaultClientScopesClientScopeIdResponse };

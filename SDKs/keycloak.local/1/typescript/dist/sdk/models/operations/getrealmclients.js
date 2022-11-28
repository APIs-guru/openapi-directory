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
var GetRealmClientsPathParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsPathParams, _super);
    function GetRealmClientsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmClientsPathParams.prototype, "realm", void 0);
    return GetRealmClientsPathParams;
}(SpeakeasyBase));
export { GetRealmClientsPathParams };
var GetRealmClientsQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmClientsQueryParams, _super);
    function GetRealmClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" }),
        __metadata("design:type", String)
    ], GetRealmClientsQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" }),
        __metadata("design:type", Number)
    ], GetRealmClientsQueryParams.prototype, "first", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetRealmClientsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", Boolean)
    ], GetRealmClientsQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viewableOnly" }),
        __metadata("design:type", Boolean)
    ], GetRealmClientsQueryParams.prototype, "viewableOnly", void 0);
    return GetRealmClientsQueryParams;
}(SpeakeasyBase));
export { GetRealmClientsQueryParams };
var GetRealmClientsRequest = /** @class */ (function (_super) {
    __extends(GetRealmClientsRequest, _super);
    function GetRealmClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsPathParams)
    ], GetRealmClientsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmClientsQueryParams)
    ], GetRealmClientsRequest.prototype, "queryParams", void 0);
    return GetRealmClientsRequest;
}(SpeakeasyBase));
export { GetRealmClientsRequest };
var GetRealmClientsResponse = /** @class */ (function (_super) {
    __extends(GetRealmClientsResponse, _super);
    function GetRealmClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ClientRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmClientsResponse.prototype, "clientRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmClientsResponse.prototype, "statusCode", void 0);
    return GetRealmClientsResponse;
}(SpeakeasyBase));
export { GetRealmClientsResponse };

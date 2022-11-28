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
var GetRealmComponentsPathParams = /** @class */ (function (_super) {
    __extends(GetRealmComponentsPathParams, _super);
    function GetRealmComponentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmComponentsPathParams.prototype, "realm", void 0);
    return GetRealmComponentsPathParams;
}(SpeakeasyBase));
export { GetRealmComponentsPathParams };
var GetRealmComponentsQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmComponentsQueryParams, _super);
    function GetRealmComponentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetRealmComponentsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], GetRealmComponentsQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetRealmComponentsQueryParams.prototype, "type", void 0);
    return GetRealmComponentsQueryParams;
}(SpeakeasyBase));
export { GetRealmComponentsQueryParams };
var GetRealmComponentsRequest = /** @class */ (function (_super) {
    __extends(GetRealmComponentsRequest, _super);
    function GetRealmComponentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmComponentsPathParams)
    ], GetRealmComponentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmComponentsQueryParams)
    ], GetRealmComponentsRequest.prototype, "queryParams", void 0);
    return GetRealmComponentsRequest;
}(SpeakeasyBase));
export { GetRealmComponentsRequest };
var GetRealmComponentsResponse = /** @class */ (function (_super) {
    __extends(GetRealmComponentsResponse, _super);
    function GetRealmComponentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ComponentRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmComponentsResponse.prototype, "componentRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmComponentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmComponentsResponse.prototype, "statusCode", void 0);
    return GetRealmComponentsResponse;
}(SpeakeasyBase));
export { GetRealmComponentsResponse };

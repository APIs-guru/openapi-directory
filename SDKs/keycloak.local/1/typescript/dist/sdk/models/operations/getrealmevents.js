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
var GetRealmEventsPathParams = /** @class */ (function (_super) {
    __extends(GetRealmEventsPathParams, _super);
    function GetRealmEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmEventsPathParams.prototype, "realm", void 0);
    return GetRealmEventsPathParams;
}(SpeakeasyBase));
export { GetRealmEventsPathParams };
var GetRealmEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetRealmEventsQueryParams, _super);
    function GetRealmEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client" }),
        __metadata("design:type", String)
    ], GetRealmEventsQueryParams.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" }),
        __metadata("design:type", String)
    ], GetRealmEventsQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" }),
        __metadata("design:type", String)
    ], GetRealmEventsQueryParams.prototype, "dateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" }),
        __metadata("design:type", Number)
    ], GetRealmEventsQueryParams.prototype, "first", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ipAddress" }),
        __metadata("design:type", String)
    ], GetRealmEventsQueryParams.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetRealmEventsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Array)
    ], GetRealmEventsQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], GetRealmEventsQueryParams.prototype, "user", void 0);
    return GetRealmEventsQueryParams;
}(SpeakeasyBase));
export { GetRealmEventsQueryParams };
var GetRealmEventsRequest = /** @class */ (function (_super) {
    __extends(GetRealmEventsRequest, _super);
    function GetRealmEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmEventsPathParams)
    ], GetRealmEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmEventsQueryParams)
    ], GetRealmEventsRequest.prototype, "queryParams", void 0);
    return GetRealmEventsRequest;
}(SpeakeasyBase));
export { GetRealmEventsRequest };
var GetRealmEventsResponse = /** @class */ (function (_super) {
    __extends(GetRealmEventsResponse, _super);
    function GetRealmEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.EventRepresentation }),
        __metadata("design:type", Array)
    ], GetRealmEventsResponse.prototype, "eventRepresentations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmEventsResponse.prototype, "statusCode", void 0);
    return GetRealmEventsResponse;
}(SpeakeasyBase));
export { GetRealmEventsResponse };

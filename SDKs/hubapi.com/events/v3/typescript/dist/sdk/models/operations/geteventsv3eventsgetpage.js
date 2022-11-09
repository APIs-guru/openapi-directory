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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetEventsV3EventsGetPageQueryParams = /** @class */ (function (_super) {
    __extends(GetEventsV3EventsGetPageQueryParams, _super);
    function GetEventsV3EventsGetPageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "after", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "before", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=eventType" }),
        __metadata("design:type", String)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "eventType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=objectId" }),
        __metadata("design:type", Number)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "objectId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=objectType" }),
        __metadata("design:type", String)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "objectType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" }),
        __metadata("design:type", Date)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "occurredAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" }),
        __metadata("design:type", Date)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "occurredBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Array)
    ], GetEventsV3EventsGetPageQueryParams.prototype, "sort", void 0);
    return GetEventsV3EventsGetPageQueryParams;
}(SpeakeasyBase));
export { GetEventsV3EventsGetPageQueryParams };
var GetEventsV3EventsGetPageSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetEventsV3EventsGetPageSecurityOption1, _super);
    function GetEventsV3EventsGetPageSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetEventsV3EventsGetPageSecurityOption1.prototype, "hapikey", void 0);
    return GetEventsV3EventsGetPageSecurityOption1;
}(SpeakeasyBase));
export { GetEventsV3EventsGetPageSecurityOption1 };
var GetEventsV3EventsGetPageSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetEventsV3EventsGetPageSecurityOption2, _super);
    function GetEventsV3EventsGetPageSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetEventsV3EventsGetPageSecurityOption2.prototype, "oauth2Legacy", void 0);
    return GetEventsV3EventsGetPageSecurityOption2;
}(SpeakeasyBase));
export { GetEventsV3EventsGetPageSecurityOption2 };
var GetEventsV3EventsGetPageSecurity = /** @class */ (function (_super) {
    __extends(GetEventsV3EventsGetPageSecurity, _super);
    function GetEventsV3EventsGetPageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetEventsV3EventsGetPageSecurityOption1)
    ], GetEventsV3EventsGetPageSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetEventsV3EventsGetPageSecurityOption2)
    ], GetEventsV3EventsGetPageSecurity.prototype, "option2", void 0);
    return GetEventsV3EventsGetPageSecurity;
}(SpeakeasyBase));
export { GetEventsV3EventsGetPageSecurity };
var GetEventsV3EventsGetPageRequest = /** @class */ (function (_super) {
    __extends(GetEventsV3EventsGetPageRequest, _super);
    function GetEventsV3EventsGetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEventsV3EventsGetPageQueryParams)
    ], GetEventsV3EventsGetPageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEventsV3EventsGetPageSecurity)
    ], GetEventsV3EventsGetPageRequest.prototype, "security", void 0);
    return GetEventsV3EventsGetPageRequest;
}(SpeakeasyBase));
export { GetEventsV3EventsGetPageRequest };
var GetEventsV3EventsGetPageResponse = /** @class */ (function (_super) {
    __extends(GetEventsV3EventsGetPageResponse, _super);
    function GetEventsV3EventsGetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetEventsV3EventsGetPageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CollectionResponseExternalUnifiedEvent)
    ], GetEventsV3EventsGetPageResponse.prototype, "collectionResponseExternalUnifiedEvent", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEventsV3EventsGetPageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEventsV3EventsGetPageResponse.prototype, "statusCode", void 0);
    return GetEventsV3EventsGetPageResponse;
}(SpeakeasyBase));
export { GetEventsV3EventsGetPageResponse };

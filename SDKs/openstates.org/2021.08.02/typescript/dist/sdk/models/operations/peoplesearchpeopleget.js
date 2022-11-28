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
var PeopleSearchPeopleGetQueryParams = /** @class */ (function (_super) {
    __extends(PeopleSearchPeopleGetQueryParams, _super);
    function PeopleSearchPeopleGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" }),
        __metadata("design:type", String)
    ], PeopleSearchPeopleGetQueryParams.prototype, "apikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", String)
    ], PeopleSearchPeopleGetQueryParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], PeopleSearchPeopleGetQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", Array)
    ], PeopleSearchPeopleGetQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" }),
        __metadata("design:type", String)
    ], PeopleSearchPeopleGetQueryParams.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PeopleSearchPeopleGetQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org_classification" }),
        __metadata("design:type", String)
    ], PeopleSearchPeopleGetQueryParams.prototype, "orgClassification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PeopleSearchPeopleGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], PeopleSearchPeopleGetQueryParams.prototype, "perPage", void 0);
    return PeopleSearchPeopleGetQueryParams;
}(SpeakeasyBase));
export { PeopleSearchPeopleGetQueryParams };
var PeopleSearchPeopleGetHeaders = /** @class */ (function (_super) {
    __extends(PeopleSearchPeopleGetHeaders, _super);
    function PeopleSearchPeopleGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], PeopleSearchPeopleGetHeaders.prototype, "xApiKey", void 0);
    return PeopleSearchPeopleGetHeaders;
}(SpeakeasyBase));
export { PeopleSearchPeopleGetHeaders };
var PeopleSearchPeopleGetRequest = /** @class */ (function (_super) {
    __extends(PeopleSearchPeopleGetRequest, _super);
    function PeopleSearchPeopleGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeopleSearchPeopleGetQueryParams)
    ], PeopleSearchPeopleGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeopleSearchPeopleGetHeaders)
    ], PeopleSearchPeopleGetRequest.prototype, "headers", void 0);
    return PeopleSearchPeopleGetRequest;
}(SpeakeasyBase));
export { PeopleSearchPeopleGetRequest };
var PeopleSearchPeopleGetResponse = /** @class */ (function (_super) {
    __extends(PeopleSearchPeopleGetResponse, _super);
    function PeopleSearchPeopleGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeopleSearchPeopleGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], PeopleSearchPeopleGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PersonList)
    ], PeopleSearchPeopleGetResponse.prototype, "personList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeopleSearchPeopleGetResponse.prototype, "statusCode", void 0);
    return PeopleSearchPeopleGetResponse;
}(SpeakeasyBase));
export { PeopleSearchPeopleGetResponse };

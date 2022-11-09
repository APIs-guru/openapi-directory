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
var GetApiVVersionMetalsSpotHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotHistoryPathParams, _super);
    function GetApiVVersionMetalsSpotHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotHistoryPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsSpotHistoryPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotHistoryPathParams };
var GetApiVVersionMetalsSpotHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotHistoryQueryParams, _super);
    function GetApiVVersionMetalsSpotHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Date)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=historicalfx" }),
        __metadata("design:type", Boolean)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "historicalfx", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "interval", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=metals" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "metals", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Date)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotHistoryQueryParams.prototype, "unitofmeasure", void 0);
    return GetApiVVersionMetalsSpotHistoryQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotHistoryQueryParams };
var GetApiVVersionMetalsSpotHistoryRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotHistoryRequest, _super);
    function GetApiVVersionMetalsSpotHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotHistoryPathParams)
    ], GetApiVVersionMetalsSpotHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotHistoryQueryParams)
    ], GetApiVVersionMetalsSpotHistoryRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsSpotHistoryRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotHistoryRequest };
var GetApiVVersionMetalsSpotHistoryResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotHistoryResponse, _super);
    function GetApiVVersionMetalsSpotHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsSpotHistoryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.IntervalCollectionResponse }),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsSpotHistoryResponse.prototype, "intervalCollectionResponses", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsSpotHistoryResponse.prototype, "problemDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsSpotHistoryResponse.prototype, "statusCode", void 0);
    return GetApiVVersionMetalsSpotHistoryResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotHistoryResponse };

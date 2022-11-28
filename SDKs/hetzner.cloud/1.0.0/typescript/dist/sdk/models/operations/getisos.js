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
var GetIsosQueryParams = /** @class */ (function (_super) {
    __extends(GetIsosQueryParams, _super);
    function GetIsosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetIsosQueryParams.prototype, "name", void 0);
    return GetIsosQueryParams;
}(SpeakeasyBase));
export { GetIsosQueryParams };
export var GetIsos200ApplicationJsonIsosTypeEnum;
(function (GetIsos200ApplicationJsonIsosTypeEnum) {
    GetIsos200ApplicationJsonIsosTypeEnum["Public"] = "public";
    GetIsos200ApplicationJsonIsosTypeEnum["Private"] = "private";
})(GetIsos200ApplicationJsonIsosTypeEnum || (GetIsos200ApplicationJsonIsosTypeEnum = {}));
var GetIsos200ApplicationJsonIsos = /** @class */ (function (_super) {
    __extends(GetIsos200ApplicationJsonIsos, _super);
    function GetIsos200ApplicationJsonIsos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetIsos200ApplicationJsonIsos.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetIsos200ApplicationJsonIsos.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetIsos200ApplicationJsonIsos.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetIsos200ApplicationJsonIsos.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetIsos200ApplicationJsonIsos.prototype, "type", void 0);
    return GetIsos200ApplicationJsonIsos;
}(SpeakeasyBase));
export { GetIsos200ApplicationJsonIsos };
var GetIsos200ApplicationJsonMetaPagination = /** @class */ (function (_super) {
    __extends(GetIsos200ApplicationJsonMetaPagination, _super);
    function GetIsos200ApplicationJsonMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetIsos200ApplicationJsonMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetIsos200ApplicationJsonMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetIsos200ApplicationJsonMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetIsos200ApplicationJsonMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetIsos200ApplicationJsonMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetIsos200ApplicationJsonMetaPagination.prototype, "totalEntries", void 0);
    return GetIsos200ApplicationJsonMetaPagination;
}(SpeakeasyBase));
export { GetIsos200ApplicationJsonMetaPagination };
var GetIsos200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetIsos200ApplicationJsonMeta, _super);
    function GetIsos200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetIsos200ApplicationJsonMetaPagination)
    ], GetIsos200ApplicationJsonMeta.prototype, "pagination", void 0);
    return GetIsos200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetIsos200ApplicationJsonMeta };
var GetIsos200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIsos200ApplicationJson, _super);
    function GetIsos200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isos", elemType: GetIsos200ApplicationJsonIsos }),
        __metadata("design:type", Array)
    ], GetIsos200ApplicationJson.prototype, "isos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetIsos200ApplicationJsonMeta)
    ], GetIsos200ApplicationJson.prototype, "meta", void 0);
    return GetIsos200ApplicationJson;
}(SpeakeasyBase));
export { GetIsos200ApplicationJson };
var GetIsosRequest = /** @class */ (function (_super) {
    __extends(GetIsosRequest, _super);
    function GetIsosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIsosQueryParams)
    ], GetIsosRequest.prototype, "queryParams", void 0);
    return GetIsosRequest;
}(SpeakeasyBase));
export { GetIsosRequest };
var GetIsosResponse = /** @class */ (function (_super) {
    __extends(GetIsosResponse, _super);
    function GetIsosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIsosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIsos200ApplicationJson)
    ], GetIsosResponse.prototype, "getIsos200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIsosResponse.prototype, "statusCode", void 0);
    return GetIsosResponse;
}(SpeakeasyBase));
export { GetIsosResponse };

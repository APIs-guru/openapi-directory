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
export var GetSshKeysSortEnum;
(function (GetSshKeysSortEnum) {
    GetSshKeysSortEnum["Id"] = "id";
    GetSshKeysSortEnum["IdAsc"] = "id:asc";
    GetSshKeysSortEnum["IdDesc"] = "id:desc";
    GetSshKeysSortEnum["Name"] = "name";
    GetSshKeysSortEnum["NameAsc"] = "name:asc";
    GetSshKeysSortEnum["NameDesc"] = "name:desc";
})(GetSshKeysSortEnum || (GetSshKeysSortEnum = {}));
var GetSshKeysQueryParams = /** @class */ (function (_super) {
    __extends(GetSshKeysQueryParams, _super);
    function GetSshKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fingerprint" }),
        __metadata("design:type", String)
    ], GetSshKeysQueryParams.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetSshKeysQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetSshKeysQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSshKeysQueryParams.prototype, "sort", void 0);
    return GetSshKeysQueryParams;
}(SpeakeasyBase));
export { GetSshKeysQueryParams };
var GetSshKeys200ApplicationJsonMetaPagination = /** @class */ (function (_super) {
    __extends(GetSshKeys200ApplicationJsonMetaPagination, _super);
    function GetSshKeys200ApplicationJsonMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJsonMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJsonMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJsonMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJsonMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJsonMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJsonMetaPagination.prototype, "totalEntries", void 0);
    return GetSshKeys200ApplicationJsonMetaPagination;
}(SpeakeasyBase));
export { GetSshKeys200ApplicationJsonMetaPagination };
var GetSshKeys200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetSshKeys200ApplicationJsonMeta, _super);
    function GetSshKeys200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetSshKeys200ApplicationJsonMetaPagination)
    ], GetSshKeys200ApplicationJsonMeta.prototype, "pagination", void 0);
    return GetSshKeys200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetSshKeys200ApplicationJsonMeta };
var GetSshKeys200ApplicationJsonSshKeys = /** @class */ (function (_super) {
    __extends(GetSshKeys200ApplicationJsonSshKeys, _super);
    function GetSshKeys200ApplicationJsonSshKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetSshKeys200ApplicationJsonSshKeys.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], GetSshKeys200ApplicationJsonSshKeys.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetSshKeys200ApplicationJsonSshKeys.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetSshKeys200ApplicationJsonSshKeys.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetSshKeys200ApplicationJsonSshKeys.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], GetSshKeys200ApplicationJsonSshKeys.prototype, "publicKey", void 0);
    return GetSshKeys200ApplicationJsonSshKeys;
}(SpeakeasyBase));
export { GetSshKeys200ApplicationJsonSshKeys };
var GetSshKeys200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSshKeys200ApplicationJson, _super);
    function GetSshKeys200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetSshKeys200ApplicationJsonMeta)
    ], GetSshKeys200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_keys", elemType: GetSshKeys200ApplicationJsonSshKeys }),
        __metadata("design:type", Array)
    ], GetSshKeys200ApplicationJson.prototype, "sshKeys", void 0);
    return GetSshKeys200ApplicationJson;
}(SpeakeasyBase));
export { GetSshKeys200ApplicationJson };
var GetSshKeysRequest = /** @class */ (function (_super) {
    __extends(GetSshKeysRequest, _super);
    function GetSshKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSshKeysQueryParams)
    ], GetSshKeysRequest.prototype, "queryParams", void 0);
    return GetSshKeysRequest;
}(SpeakeasyBase));
export { GetSshKeysRequest };
var GetSshKeysResponse = /** @class */ (function (_super) {
    __extends(GetSshKeysResponse, _super);
    function GetSshKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSshKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSshKeys200ApplicationJson)
    ], GetSshKeysResponse.prototype, "getSshKeys200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSshKeysResponse.prototype, "statusCode", void 0);
    return GetSshKeysResponse;
}(SpeakeasyBase));
export { GetSshKeysResponse };

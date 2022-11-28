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
var NodesContributorsCreatePathParams = /** @class */ (function (_super) {
    __extends(NodesContributorsCreatePathParams, _super);
    function NodesContributorsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesContributorsCreatePathParams.prototype, "nodeId", void 0);
    return NodesContributorsCreatePathParams;
}(SpeakeasyBase));
export { NodesContributorsCreatePathParams };
export var NodesContributorsCreateContributorAttributesPermissionEnum;
(function (NodesContributorsCreateContributorAttributesPermissionEnum) {
    NodesContributorsCreateContributorAttributesPermissionEnum["Read"] = "read";
    NodesContributorsCreateContributorAttributesPermissionEnum["Write"] = "write";
    NodesContributorsCreateContributorAttributesPermissionEnum["Admin"] = "admin";
})(NodesContributorsCreateContributorAttributesPermissionEnum || (NodesContributorsCreateContributorAttributesPermissionEnum = {}));
// NodesContributorsCreateContributorAttributesInput
/**
 * The properties of the contributor entity.
**/
var NodesContributorsCreateContributorAttributesInput = /** @class */ (function (_super) {
    __extends(NodesContributorsCreateContributorAttributesInput, _super);
    function NodesContributorsCreateContributorAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bibliographic" }),
        __metadata("design:type", Boolean)
    ], NodesContributorsCreateContributorAttributesInput.prototype, "bibliographic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], NodesContributorsCreateContributorAttributesInput.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], NodesContributorsCreateContributorAttributesInput.prototype, "permission", void 0);
    return NodesContributorsCreateContributorAttributesInput;
}(SpeakeasyBase));
export { NodesContributorsCreateContributorAttributesInput };
// NodesContributorsCreateContributorRelationshipsInput
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
var NodesContributorsCreateContributorRelationshipsInput = /** @class */ (function (_super) {
    __extends(NodesContributorsCreateContributorRelationshipsInput, _super);
    function NodesContributorsCreateContributorRelationshipsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], NodesContributorsCreateContributorRelationshipsInput.prototype, "user", void 0);
    return NodesContributorsCreateContributorRelationshipsInput;
}(SpeakeasyBase));
export { NodesContributorsCreateContributorRelationshipsInput };
var NodesContributorsCreateContributorInput = /** @class */ (function (_super) {
    __extends(NodesContributorsCreateContributorInput, _super);
    function NodesContributorsCreateContributorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", NodesContributorsCreateContributorAttributesInput)
    ], NodesContributorsCreateContributorInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", NodesContributorsCreateContributorRelationshipsInput)
    ], NodesContributorsCreateContributorInput.prototype, "relationships", void 0);
    return NodesContributorsCreateContributorInput;
}(SpeakeasyBase));
export { NodesContributorsCreateContributorInput };
var NodesContributorsCreateRequest = /** @class */ (function (_super) {
    __extends(NodesContributorsCreateRequest, _super);
    function NodesContributorsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NodesContributorsCreatePathParams)
    ], NodesContributorsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NodesContributorsCreateContributorInput)
    ], NodesContributorsCreateRequest.prototype, "request", void 0);
    return NodesContributorsCreateRequest;
}(SpeakeasyBase));
export { NodesContributorsCreateRequest };
var NodesContributorsCreateResponse = /** @class */ (function (_super) {
    __extends(NodesContributorsCreateResponse, _super);
    function NodesContributorsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NodesContributorsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NodesContributorsCreateResponse.prototype, "statusCode", void 0);
    return NodesContributorsCreateResponse;
}(SpeakeasyBase));
export { NodesContributorsCreateResponse };

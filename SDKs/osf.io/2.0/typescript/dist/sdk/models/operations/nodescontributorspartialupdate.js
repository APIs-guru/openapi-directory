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
var NodesContributorsPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(NodesContributorsPartialUpdatePathParams, _super);
    function NodesContributorsPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesContributorsPartialUpdatePathParams.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], NodesContributorsPartialUpdatePathParams.prototype, "userId", void 0);
    return NodesContributorsPartialUpdatePathParams;
}(SpeakeasyBase));
export { NodesContributorsPartialUpdatePathParams };
export var NodesContributorsPartialUpdateContributorAttributesPermissionEnum;
(function (NodesContributorsPartialUpdateContributorAttributesPermissionEnum) {
    NodesContributorsPartialUpdateContributorAttributesPermissionEnum["Read"] = "read";
    NodesContributorsPartialUpdateContributorAttributesPermissionEnum["Write"] = "write";
    NodesContributorsPartialUpdateContributorAttributesPermissionEnum["Admin"] = "admin";
})(NodesContributorsPartialUpdateContributorAttributesPermissionEnum || (NodesContributorsPartialUpdateContributorAttributesPermissionEnum = {}));
// NodesContributorsPartialUpdateContributorAttributesInput
/**
 * The properties of the contributor entity.
**/
var NodesContributorsPartialUpdateContributorAttributesInput = /** @class */ (function (_super) {
    __extends(NodesContributorsPartialUpdateContributorAttributesInput, _super);
    function NodesContributorsPartialUpdateContributorAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bibliographic" }),
        __metadata("design:type", Boolean)
    ], NodesContributorsPartialUpdateContributorAttributesInput.prototype, "bibliographic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], NodesContributorsPartialUpdateContributorAttributesInput.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], NodesContributorsPartialUpdateContributorAttributesInput.prototype, "permission", void 0);
    return NodesContributorsPartialUpdateContributorAttributesInput;
}(SpeakeasyBase));
export { NodesContributorsPartialUpdateContributorAttributesInput };
// NodesContributorsPartialUpdateContributorRelationshipsInput
/**
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
var NodesContributorsPartialUpdateContributorRelationshipsInput = /** @class */ (function (_super) {
    __extends(NodesContributorsPartialUpdateContributorRelationshipsInput, _super);
    function NodesContributorsPartialUpdateContributorRelationshipsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], NodesContributorsPartialUpdateContributorRelationshipsInput.prototype, "user", void 0);
    return NodesContributorsPartialUpdateContributorRelationshipsInput;
}(SpeakeasyBase));
export { NodesContributorsPartialUpdateContributorRelationshipsInput };
var NodesContributorsPartialUpdateContributorInput = /** @class */ (function (_super) {
    __extends(NodesContributorsPartialUpdateContributorInput, _super);
    function NodesContributorsPartialUpdateContributorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", NodesContributorsPartialUpdateContributorAttributesInput)
    ], NodesContributorsPartialUpdateContributorInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", NodesContributorsPartialUpdateContributorRelationshipsInput)
    ], NodesContributorsPartialUpdateContributorInput.prototype, "relationships", void 0);
    return NodesContributorsPartialUpdateContributorInput;
}(SpeakeasyBase));
export { NodesContributorsPartialUpdateContributorInput };
var NodesContributorsPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(NodesContributorsPartialUpdateRequest, _super);
    function NodesContributorsPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NodesContributorsPartialUpdatePathParams)
    ], NodesContributorsPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NodesContributorsPartialUpdateContributorInput)
    ], NodesContributorsPartialUpdateRequest.prototype, "request", void 0);
    return NodesContributorsPartialUpdateRequest;
}(SpeakeasyBase));
export { NodesContributorsPartialUpdateRequest };
var NodesContributorsPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(NodesContributorsPartialUpdateResponse, _super);
    function NodesContributorsPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NodesContributorsPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NodesContributorsPartialUpdateResponse.prototype, "statusCode", void 0);
    return NodesContributorsPartialUpdateResponse;
}(SpeakeasyBase));
export { NodesContributorsPartialUpdateResponse };

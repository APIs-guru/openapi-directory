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
import { GrantInput } from "./grant";
import { Grant } from "./grant";
export var GrantsResponseGlobalAccountAccessEnum;
(function (GrantsResponseGlobalAccountAccessEnum) {
    GrantsResponseGlobalAccountAccessEnum["ReadOnly"] = "read_only";
    GrantsResponseGlobalAccountAccessEnum["ReadWrite"] = "read_write";
})(GrantsResponseGlobalAccountAccessEnum || (GrantsResponseGlobalAccountAccessEnum = {}));
// GrantsResponseGlobal
/**
 * A structure containing the Account-level grants a User has.
 *
**/
var GrantsResponseGlobal = /** @class */ (function (_super) {
    __extends(GrantsResponseGlobal, _super);
    function GrantsResponseGlobal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_access" }),
        __metadata("design:type", String)
    ], GrantsResponseGlobal.prototype, "accountAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_domains" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "addDomains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_images" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "addImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_linodes" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "addLinodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_longview" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "addLongview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_nodebalancers" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "addNodebalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_stackscripts" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "addStackscripts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_volumes" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "addVolumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancel_account" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "cancelAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longview_subscription" }),
        __metadata("design:type", Boolean)
    ], GrantsResponseGlobal.prototype, "longviewSubscription", void 0);
    return GrantsResponseGlobal;
}(SpeakeasyBase));
export { GrantsResponseGlobal };
// GrantsResponseInput
/**
 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
 *
**/
var GrantsResponseInput = /** @class */ (function (_super) {
    __extends(GrantsResponseInput, _super);
    function GrantsResponseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain", elemType: GrantInput }),
        __metadata("design:type", Array)
    ], GrantsResponseInput.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=global" }),
        __metadata("design:type", GrantsResponseGlobal)
    ], GrantsResponseInput.prototype, "global", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image", elemType: GrantInput }),
        __metadata("design:type", Array)
    ], GrantsResponseInput.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linode", elemType: GrantInput }),
        __metadata("design:type", Array)
    ], GrantsResponseInput.prototype, "linode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longview", elemType: GrantInput }),
        __metadata("design:type", Array)
    ], GrantsResponseInput.prototype, "longview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodebalancer", elemType: GrantInput }),
        __metadata("design:type", Array)
    ], GrantsResponseInput.prototype, "nodebalancer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackscript", elemType: GrantInput }),
        __metadata("design:type", Array)
    ], GrantsResponseInput.prototype, "stackscript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume", elemType: GrantInput }),
        __metadata("design:type", Array)
    ], GrantsResponseInput.prototype, "volume", void 0);
    return GrantsResponseInput;
}(SpeakeasyBase));
export { GrantsResponseInput };
// GrantsResponse
/**
 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
 *
**/
var GrantsResponse = /** @class */ (function (_super) {
    __extends(GrantsResponse, _super);
    function GrantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain", elemType: Grant }),
        __metadata("design:type", Array)
    ], GrantsResponse.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=global" }),
        __metadata("design:type", GrantsResponseGlobal)
    ], GrantsResponse.prototype, "global", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image", elemType: Grant }),
        __metadata("design:type", Array)
    ], GrantsResponse.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linode", elemType: Grant }),
        __metadata("design:type", Array)
    ], GrantsResponse.prototype, "linode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longview", elemType: Grant }),
        __metadata("design:type", Array)
    ], GrantsResponse.prototype, "longview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodebalancer", elemType: Grant }),
        __metadata("design:type", Array)
    ], GrantsResponse.prototype, "nodebalancer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackscript", elemType: Grant }),
        __metadata("design:type", Array)
    ], GrantsResponse.prototype, "stackscript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume", elemType: Grant }),
        __metadata("design:type", Array)
    ], GrantsResponse.prototype, "volume", void 0);
    return GrantsResponse;
}(SpeakeasyBase));
export { GrantsResponse };

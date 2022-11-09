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
import { Expr } from "./expr";
var PolicyBindings = /** @class */ (function (_super) {
    __extends(PolicyBindings, _super);
    function PolicyBindings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=condition" }),
        __metadata("design:type", Expr)
    ], PolicyBindings.prototype, "condition", void 0);
    __decorate([
        Metadata({ data: "json, name=members" }),
        __metadata("design:type", Array)
    ], PolicyBindings.prototype, "members", void 0);
    __decorate([
        Metadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], PolicyBindings.prototype, "role", void 0);
    return PolicyBindings;
}(SpeakeasyBase));
export { PolicyBindings };
// Policy
/**
 * A bucket/object IAM policy.
**/
var Policy = /** @class */ (function (_super) {
    __extends(Policy, _super);
    function Policy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bindings", elemType: shared.PolicyBindings }),
        __metadata("design:type", Array)
    ], Policy.prototype, "bindings", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Policy.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Policy.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], Policy.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Policy.prototype, "version", void 0);
    return Policy;
}(SpeakeasyBase));
export { Policy };

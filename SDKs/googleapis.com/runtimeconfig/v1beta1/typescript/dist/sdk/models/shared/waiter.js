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
import { Status } from "./status";
import { EndCondition } from "./endcondition";
// Waiter
/**
 * A Waiter resource waits for some end condition within a RuntimeConfig resource to be met before it returns. For example, assume you have a distributed system where each node writes to a Variable resource indicating the node's readiness as part of the startup process. You then configure a Waiter resource with the success condition set to wait until some number of nodes have checked in. Afterwards, your application runs some arbitrary code after the condition has been met and the waiter returns successfully. Once created, a Waiter resource is immutable. To learn more about using waiters, read the [Creating a Waiter](/deployment-manager/runtime-configurator/creating-a-waiter) documentation.
**/
var Waiter = /** @class */ (function (_super) {
    __extends(Waiter, _super);
    function Waiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Waiter.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=done" }),
        __metadata("design:type", Boolean)
    ], Waiter.prototype, "done", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], Waiter.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failure" }),
        __metadata("design:type", EndCondition)
    ], Waiter.prototype, "failure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Waiter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", EndCondition)
    ], Waiter.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], Waiter.prototype, "timeout", void 0);
    return Waiter;
}(SpeakeasyBase));
export { Waiter };

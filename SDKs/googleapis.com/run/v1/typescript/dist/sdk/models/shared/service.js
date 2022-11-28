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
import { ObjectMeta } from "./objectmeta";
import { ServiceSpec } from "./servicespec";
import { ServiceStatus } from "./servicestatus";
import { ServiceSpecInput } from "./servicespec";
import { ServiceStatusInput } from "./servicestatus";
// Service
/**
 * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
**/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiVersion" }),
        __metadata("design:type", String)
    ], Service.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Service.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", ObjectMeta)
    ], Service.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", ServiceSpec)
    ], Service.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", ServiceStatus)
    ], Service.prototype, "status", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
// ServiceInput
/**
 * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
**/
var ServiceInput = /** @class */ (function (_super) {
    __extends(ServiceInput, _super);
    function ServiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiVersion" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", ObjectMeta)
    ], ServiceInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", ServiceSpecInput)
    ], ServiceInput.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", ServiceStatusInput)
    ], ServiceInput.prototype, "status", void 0);
    return ServiceInput;
}(SpeakeasyBase));
export { ServiceInput };

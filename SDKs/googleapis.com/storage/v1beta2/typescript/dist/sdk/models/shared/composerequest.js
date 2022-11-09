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
import { Object } from "./object";
// ComposeRequestSourceObjectsObjectPreconditions
/**
 * Conditions that must be met for this operation to execute.
**/
var ComposeRequestSourceObjectsObjectPreconditions = /** @class */ (function (_super) {
    __extends(ComposeRequestSourceObjectsObjectPreconditions, _super);
    function ComposeRequestSourceObjectsObjectPreconditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], ComposeRequestSourceObjectsObjectPreconditions.prototype, "ifGenerationMatch", void 0);
    return ComposeRequestSourceObjectsObjectPreconditions;
}(SpeakeasyBase));
export { ComposeRequestSourceObjectsObjectPreconditions };
var ComposeRequestSourceObjects = /** @class */ (function (_super) {
    __extends(ComposeRequestSourceObjects, _super);
    function ComposeRequestSourceObjects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=generation" }),
        __metadata("design:type", String)
    ], ComposeRequestSourceObjects.prototype, "generation", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ComposeRequestSourceObjects.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=objectPreconditions" }),
        __metadata("design:type", ComposeRequestSourceObjectsObjectPreconditions)
    ], ComposeRequestSourceObjects.prototype, "objectPreconditions", void 0);
    return ComposeRequestSourceObjects;
}(SpeakeasyBase));
export { ComposeRequestSourceObjects };
// ComposeRequest
/**
 * A Compose request.
**/
var ComposeRequest = /** @class */ (function (_super) {
    __extends(ComposeRequest, _super);
    function ComposeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=destination" }),
        __metadata("design:type", Object)
    ], ComposeRequest.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ComposeRequest.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceObjects", elemType: shared.ComposeRequestSourceObjects }),
        __metadata("design:type", Array)
    ], ComposeRequest.prototype, "sourceObjects", void 0);
    return ComposeRequest;
}(SpeakeasyBase));
export { ComposeRequest };

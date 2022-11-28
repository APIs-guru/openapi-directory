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
import { ChildLink } from "./childlink";
import { ShortRepresentation } from "./shortrepresentation";
export var PlanNodeKindEnum;
(function (PlanNodeKindEnum) {
    PlanNodeKindEnum["KindUnspecified"] = "KIND_UNSPECIFIED";
    PlanNodeKindEnum["Relational"] = "RELATIONAL";
    PlanNodeKindEnum["Scalar"] = "SCALAR";
})(PlanNodeKindEnum || (PlanNodeKindEnum = {}));
// PlanNode
/**
 * Node information for nodes appearing in a QueryPlan.plan_nodes.
**/
var PlanNode = /** @class */ (function (_super) {
    __extends(PlanNode, _super);
    function PlanNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childLinks", elemType: ChildLink }),
        __metadata("design:type", Array)
    ], PlanNode.prototype, "childLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PlanNode.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStats" }),
        __metadata("design:type", Map)
    ], PlanNode.prototype, "executionStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], PlanNode.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PlanNode.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], PlanNode.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortRepresentation" }),
        __metadata("design:type", ShortRepresentation)
    ], PlanNode.prototype, "shortRepresentation", void 0);
    return PlanNode;
}(SpeakeasyBase));
export { PlanNode };

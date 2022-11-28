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
import { Attributes } from "./attributes";
export var LinkTypeEnum;
(function (LinkTypeEnum) {
    LinkTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    LinkTypeEnum["ChildLinkedSpan"] = "CHILD_LINKED_SPAN";
    LinkTypeEnum["ParentLinkedSpan"] = "PARENT_LINKED_SPAN";
})(LinkTypeEnum || (LinkTypeEnum = {}));
// Link
/**
 * A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.
**/
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Attributes)
    ], Link.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spanId" }),
        __metadata("design:type", String)
    ], Link.prototype, "spanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traceId" }),
        __metadata("design:type", String)
    ], Link.prototype, "traceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Link.prototype, "type", void 0);
    return Link;
}(SpeakeasyBase));
export { Link };

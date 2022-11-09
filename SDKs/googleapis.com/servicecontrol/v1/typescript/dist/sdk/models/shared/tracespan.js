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
import { Attributes } from "./attributes";
import { TruncatableString } from "./truncatablestring";
import { Status } from "./status";
export var TraceSpanSpanKindEnum;
(function (TraceSpanSpanKindEnum) {
    TraceSpanSpanKindEnum["SpanKindUnspecified"] = "SPAN_KIND_UNSPECIFIED";
    TraceSpanSpanKindEnum["Internal"] = "INTERNAL";
    TraceSpanSpanKindEnum["Server"] = "SERVER";
    TraceSpanSpanKindEnum["Client"] = "CLIENT";
    TraceSpanSpanKindEnum["Producer"] = "PRODUCER";
    TraceSpanSpanKindEnum["Consumer"] = "CONSUMER";
})(TraceSpanSpanKindEnum || (TraceSpanSpanKindEnum = {}));
// TraceSpan
/**
 * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace.
**/
var TraceSpan = /** @class */ (function (_super) {
    __extends(TraceSpan, _super);
    function TraceSpan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attributes" }),
        __metadata("design:type", Attributes)
    ], TraceSpan.prototype, "attributes", void 0);
    __decorate([
        Metadata({ data: "json, name=childSpanCount" }),
        __metadata("design:type", Number)
    ], TraceSpan.prototype, "childSpanCount", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", TruncatableString)
    ], TraceSpan.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=parentSpanId" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "parentSpanId", void 0);
    __decorate([
        Metadata({ data: "json, name=sameProcessAsParentSpan" }),
        __metadata("design:type", Boolean)
    ], TraceSpan.prototype, "sameProcessAsParentSpan", void 0);
    __decorate([
        Metadata({ data: "json, name=spanId" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "spanId", void 0);
    __decorate([
        Metadata({ data: "json, name=spanKind" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "spanKind", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Status)
    ], TraceSpan.prototype, "status", void 0);
    return TraceSpan;
}(SpeakeasyBase));
export { TraceSpan };

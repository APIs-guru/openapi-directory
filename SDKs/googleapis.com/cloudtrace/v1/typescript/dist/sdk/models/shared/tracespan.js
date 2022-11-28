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
export var TraceSpanKindEnum;
(function (TraceSpanKindEnum) {
    TraceSpanKindEnum["SpanKindUnspecified"] = "SPAN_KIND_UNSPECIFIED";
    TraceSpanKindEnum["RpcServer"] = "RPC_SERVER";
    TraceSpanKindEnum["RpcClient"] = "RPC_CLIENT";
})(TraceSpanKindEnum || (TraceSpanKindEnum = {}));
// TraceSpan
/**
 * A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
**/
var TraceSpan = /** @class */ (function (_super) {
    __extends(TraceSpan, _super);
    function TraceSpan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], TraceSpan.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentSpanId" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "parentSpanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spanId" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "spanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], TraceSpan.prototype, "startTime", void 0);
    return TraceSpan;
}(SpeakeasyBase));
export { TraceSpan };

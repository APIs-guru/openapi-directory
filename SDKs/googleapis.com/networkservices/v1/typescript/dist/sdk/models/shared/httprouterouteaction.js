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
import { HttpRouteCorsPolicy } from "./httproutecorspolicy";
import { HttpRouteDestination } from "./httproutedestination";
import { HttpRouteFaultInjectionPolicy } from "./httproutefaultinjectionpolicy";
import { HttpRouteRedirect } from "./httprouteredirect";
import { HttpRouteHeaderModifier } from "./httprouteheadermodifier";
import { HttpRouteRequestMirrorPolicy } from "./httprouterequestmirrorpolicy";
import { HttpRouteRetryPolicy } from "./httprouteretrypolicy";
import { HttpRouteUrlRewrite } from "./httprouteurlrewrite";
// HttpRouteRouteAction
/**
 * The specifications for routing traffic and applying associated policies.
**/
var HttpRouteRouteAction = /** @class */ (function (_super) {
    __extends(HttpRouteRouteAction, _super);
    function HttpRouteRouteAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corsPolicy" }),
        __metadata("design:type", HttpRouteCorsPolicy)
    ], HttpRouteRouteAction.prototype, "corsPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinations", elemType: HttpRouteDestination }),
        __metadata("design:type", Array)
    ], HttpRouteRouteAction.prototype, "destinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faultInjectionPolicy" }),
        __metadata("design:type", HttpRouteFaultInjectionPolicy)
    ], HttpRouteRouteAction.prototype, "faultInjectionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect" }),
        __metadata("design:type", HttpRouteRedirect)
    ], HttpRouteRouteAction.prototype, "redirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestHeaderModifier" }),
        __metadata("design:type", HttpRouteHeaderModifier)
    ], HttpRouteRouteAction.prototype, "requestHeaderModifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMirrorPolicy" }),
        __metadata("design:type", HttpRouteRequestMirrorPolicy)
    ], HttpRouteRouteAction.prototype, "requestMirrorPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseHeaderModifier" }),
        __metadata("design:type", HttpRouteHeaderModifier)
    ], HttpRouteRouteAction.prototype, "responseHeaderModifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryPolicy" }),
        __metadata("design:type", HttpRouteRetryPolicy)
    ], HttpRouteRouteAction.prototype, "retryPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], HttpRouteRouteAction.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlRewrite" }),
        __metadata("design:type", HttpRouteUrlRewrite)
    ], HttpRouteRouteAction.prototype, "urlRewrite", void 0);
    return HttpRouteRouteAction;
}(SpeakeasyBase));
export { HttpRouteRouteAction };

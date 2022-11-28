# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WebsecurityscannerProjectsScanConfigsCreateRequest(
    security=operations.WebsecurityscannerProjectsScanConfigsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.WebsecurityscannerProjectsScanConfigsCreatePathParams(
        parent="voluptas",
    ),
    query_params=operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams(
        dollar_xgafv="2",
        access_token="rerum",
        alt="media",
        callback="maxime",
        fields="rerum",
        key="inventore",
        oauth_token="explicabo",
        pretty_print=False,
        quota_user="et",
        upload_type="soluta",
        upload_protocol="ab",
    ),
    request=shared.ScanConfig(
        authentication=shared.Authentication(
            custom_account=shared.CustomAccount(
                login_url="ullam",
                password="illo",
                username="nostrum",
            ),
            google_account=shared.GoogleAccount(
                password="esse",
                username="dolorem",
            ),
            iap_credential=shared.IapCredential(
                iap_test_service_account_info=shared.IapTestServiceAccountInfo(
                    target_audience_client_id="odit",
                ),
            ),
        ),
        blacklist_patterns=[
            "voluptatum",
        ],
        display_name="tempore",
        export_to_security_command_center="ENABLED",
        ignore_http_status_errors=False,
        latest_run=shared.ScanRun(
            end_time="suscipit",
            error_trace=shared.ScanRunErrorTrace(
                code="AUTHENTICATION_CONFIG_ISSUE",
                most_common_http_error_code=6560153558486064374,
                scan_config_error=shared.ScanConfigError(
                    code="SCAN_ALREADY_RUNNING",
                    field_name="voluptatum",
                ),
            ),
            execution_state="EXECUTION_STATE_UNSPECIFIED",
            has_vulnerabilities=False,
            name="quos",
            progress_percent=4657958053555222384,
            result_state="ERROR",
            start_time="commodi",
            urls_crawled_count="et",
            urls_tested_count="necessitatibus",
            warning_traces=[
                shared.ScanRunWarningTrace(
                    code="NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN",
                ),
                shared.ScanRunWarningTrace(
                    code="BLOCKED_BY_IAP",
                ),
            ],
        ),
        managed_scan=False,
        max_qps=6612788434572589531,
        name="ratione",
        risk_level="RISK_LEVEL_UNSPECIFIED",
        schedule=shared.Schedule(
            interval_duration_days=6888007712442229941,
            schedule_time="itaque",
        ),
        starting_urls=[
            "earum",
            "incidunt",
        ],
        static_ip_scan=False,
        target_platforms=[
            "CLOUD_RUN",
            "TARGET_PLATFORM_UNSPECIFIED",
        ],
        user_agent="CHROME_ANDROID",
    ),
)
    
res = s.projects.websecurityscanner_projects_scan_configs_create(req)

if res.scan_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `websecurityscanner_projects_scan_configs_create` - Creates a new ScanConfig.
* `websecurityscanner_projects_scan_configs_delete` - Deletes an existing ScanConfig and its child resources.
* `websecurityscanner_projects_scan_configs_list` - Lists ScanConfigs under a given project.
* `websecurityscanner_projects_scan_configs_patch` - Updates a ScanConfig. This method support partial update of a ScanConfig.
* `websecurityscanner_projects_scan_configs_scan_runs_crawled_urls_list` - List CrawledUrls under a given ScanRun.
* `websecurityscanner_projects_scan_configs_scan_runs_finding_type_stats_list` - List all FindingTypeStats under a given ScanRun.
* `websecurityscanner_projects_scan_configs_scan_runs_findings_get` - Gets a Finding.
* `websecurityscanner_projects_scan_configs_scan_runs_findings_list` - List Findings under a given ScanRun.
* `websecurityscanner_projects_scan_configs_scan_runs_list` - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* `websecurityscanner_projects_scan_configs_scan_runs_stop` - Stops a ScanRun. The stopped ScanRun is returned.
* `websecurityscanner_projects_scan_configs_start` - Start a ScanRun according to the given ScanConfig.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

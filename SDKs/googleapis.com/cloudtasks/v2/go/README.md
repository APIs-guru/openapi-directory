# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CloudtasksProjectsLocationsListRequest{
        Security: operations.CloudtasksProjectsLocationsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudtasksProjectsLocationsListPathParams{
            Name: "est",
        },
        QueryParams: operations.CloudtasksProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "occaecati",
            Alt: "json",
            Callback: "aliquam",
            Fields: "voluptas",
            Filter: "vero",
            Key: "quidem",
            OauthToken: "quidem",
            PageSize: 7184138749082569973,
            PageToken: "corrupti",
            PrettyPrint: true,
            QuotaUser: "omnis",
            UploadType: "quis",
            UploadProtocol: "blanditiis",
        },
    }
    
    res, err := s.Projects.CloudtasksProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `CloudtasksProjectsLocationsList` - Lists information about the supported locations for this service.
* `CloudtasksProjectsLocationsQueuesCreate` - Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* `CloudtasksProjectsLocationsQueuesGetIamPolicy` - Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`
* `CloudtasksProjectsLocationsQueuesList` - Lists queues. Queues are returned in lexicographical order.
* `CloudtasksProjectsLocationsQueuesPatch` - Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* `CloudtasksProjectsLocationsQueuesPause` - Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.
* `CloudtasksProjectsLocationsQueuesPurge` - Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
* `CloudtasksProjectsLocationsQueuesResume` - Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
* `CloudtasksProjectsLocationsQueuesSetIamPolicy` - Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`
* `CloudtasksProjectsLocationsQueuesTasksCreate` - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.
* `CloudtasksProjectsLocationsQueuesTasksDelete` - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.
* `CloudtasksProjectsLocationsQueuesTasksGet` - Gets a task.
* `CloudtasksProjectsLocationsQueuesTasksList` - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
* `CloudtasksProjectsLocationsQueuesTasksRun` - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.
* `CloudtasksProjectsLocationsQueuesTestIamPermissions` - Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
